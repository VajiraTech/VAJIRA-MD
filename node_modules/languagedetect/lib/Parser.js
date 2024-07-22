var dbUnicodeBlocks = require('../data/unicode_blocks.json');

/**
 * This class represents a text sample to be parsed.
 *
 * Largely inspired from the PHP Pear Package Text_LanguageDetect by Nicholas Pisarro
 * Licence: http://www.debian.org/misc/bsd.license BSD
 *
 * @author Francois-Guillaume Ribreau - @FGRibreau
 * @author Ruslan Zavackiy - @Chaoser
 *
 * @see https://github.com/FGRibreau/node-language-detect
 */
var Parser = module.exports = function (string) {
  /**
   * The size of the trigram data arrays
   *
   * @access   private
   * @var      int
   */
  this.threshold = 300;

  /**
   * stores the trigram ranks of the sample
   *
   * @access  private
   * @var     array
   */
  this.trigramRanks = {};

  /**
   * Whether the parser should compile trigrams
   *
   * @access  private
   * @var     bool
   */
  this.compileTrigram = true;

  this.compileUnicode = true;
  this.unicodeSkipAscii = true;
  this.unicodeBlocks = {};

  /**
   * Whether the trigram parser should pad the beginning of the string
   *
   * @access  private
   * @var     bool
   */
  this.trigramPadStart = false;

  this.trigram = {};

  /**
   * the piece of text being parsed
   *
   * @access  private
   * @var     string
   */

  /**
   * Constructor
   *
   * @access  private
   * @param   string  string to be parsed
   */
  this.string = string ? string.replace(/[~!@#$%^&*()_|+\-=?;:",.<>\{\}\[\]\\\/]/g, ' ') : '';
};

Parser.prototype = {
  /**
   * turn on/off padding the beginning of the sample string
   *
   * @access  public
   * @param   bool   true for on, false for off
   */
  setPadStart: function (bool) {
    this.trigramPadStart = bool || true;
  },

  /**
   * Returns the trigram ranks for the text sample
   *
   * @access  public
   * @return  array   trigram ranks in the text sample
   */
  getTrigramRanks: function () {
    return this.trigramRanks;
  },

  getBlockCount: function () {
    return dbUnicodeBlocks.length;
  },

  getUnicodeBlocks: function () {
    return this.unicodeBlocks;
  },

  /**
   * Executes the parsing operation
   *
   * Be sure to call the set*() functions to set options and the
   * prepare*() functions first to tell it what kind of data to compute
   *
   * Afterwards the get*() functions can be used to access the compiled
   * information.
   *
   * @access public
   */
  analyze: function () {
    var len = this.string.length
      , byteCounter = 0
      , a = ' ', b = ' '
      , dropone, c;

    if (this.compileUnicode) {
      var blocksCount = dbUnicodeBlocks.length;
    }

    // trigram startup
    if (this.compileTrigram) {
      // initialize them as blank so the parser will skip the first two
      // (since it skips trigrams with more than  2 contiguous spaces)
      a = ' ';
      b = ' ';

      // kludge
      // if it finds a valid trigram to start and the start pad option is
      // off, then set a variable that will be used to reduce this
      // trigram after parsing has finished
      if (!this.trigramPadStart) {
        a = this.string.charAt(byteCounter++).toLowerCase();

        if (a != ' ') {
          b = this.string.charAt(byteCounter).toLowerCase();
          dropone = ' ' + a + b;
        }

        byteCounter = 0;
        a = ' ';
        b = ' ';
      }
    }

    var skippedCount = 0;
    var unicodeChars = {};

    while (byteCounter < len) {
      c = this.string.charAt(byteCounter++).toLowerCase();

      // language trigram detection
      if (this.compileTrigram) {
        if (!(b == ' ' && (a == ' ' || c == ' '))) {
          var abc = a + b + c;
          this.trigram[abc] = this.trigram[abc] ? this.trigram[abc] += 1 : 1;
        }

        a = b;
        b = c;
      }

      if (this.compileUnicode) {
        var charCode = c.charCodeAt(0);

        if (this.unicodeSkipAscii
          && c.match(/[a-z ]/i)
          && (charCode < 65 || charCode > 122 || (charCode > 90 && charCode < 97))
          && c != "'") {

          skippedCount++;
          continue;
        }

        unicodeChars[c] = unicodeChars[c] ? unicodeChars[c] += 1 : 1;
      }
    }

    this.unicodeBlocks = {};

    if (this.compileUnicode) {
      var keys = Object.keys(unicodeChars)
        , keysLength = keys.length;

      for (var i = keysLength; i--;) {
        var unicode = keys[i].charCodeAt(0)
          , count = unicodeChars[keys[i]]
          , search = this.unicodeBlockName(unicode, blocksCount)
          , blockName = search != -1 ? search[2] : '[Malformatted]';

        this.unicodeBlocks[blockName] = this.unicodeBlocks[blockName] ? this.unicodeBlocks[blockName] += count : count;
      }
    }

    // trigram cleanup
    if (this.compileTrigram) {
      // pad the end
      if (b != ' ') {
        var ab = a + b + ' ';
        this.trigram[ab] = this.trigram[ab] ? this.trigram[ab] += 1 : 1;
      }

      // perl compatibility; Language::Guess does not pad the beginning
      // kludge
      if (typeof dropone != 'undefined' && this.trigram[dropone] == 1) {
        delete this.trigram[dropone];
      }

      if (this.trigram && Object.keys(this.trigram).length > 0) {
        this.trigramRanks = this.arrRank(this.trigram);
      } else {
        this.trigramRanks = {};
      }
    }
  },

  /**
   * Sorts an array by value breaking ties alphabetically
   *
   * @access private
   * @param arr the array to sort
   */
  bubleSort: function (arr) {
    // should do the same as this perl statement:
    // sort { $trigrams{$b} == $trigrams{$a} ?  $a cmp $b : $trigrams{$b} <=> $trigrams{$a} }

    // needs to sort by both key and value at once
    // using the key to break ties for the value

    // converts array into an array of arrays of each key and value
    // may be a better way of doing this
    var combined = [];

    for (var key in arr) {
      combined.push([key, arr[key]]);
    }

    combined = combined.sort(this.sortFunc);

    var replacement = {};

    var length = combined.length;

    for (var i = 0; i < length; i++) {
      replacement[combined[i][0]] = combined[i][1];
    }

    return replacement;
  },

  /**
   * Converts a set of trigrams from frequencies to ranks
   *
   * Thresholds (cuts off) the list at $this->_threshold
   *
   * @access  protected
   * @param   arr     array of trgram
   * @return  object  ranks of trigrams
   */
  arrRank: function (arr) {

    // sorts alphabetically first as a standard way of breaking rank ties
    arr = this.bubleSort(arr);

    var rank = {}, i = 0;

    for (var key in arr) {
      rank[key] = i++;

      // cut off at a standard threshold
      if (i >= this.threshold) {
        break;
      }
    }

    return rank;
  },

  /**
   * Sort function used by bubble sort
   *
   * Callback function for usort().
   *
   * @access   private
   * @param    a    first param passed by usort()
   * @param    b    second param passed by usort()
   * @return   int  1 if $a is greater, -1 if not
   *
   * @see      bubleSort()
   */
  sortFunc: function (a, b) {
    // each is actually a key/value pair, so that it can compare using both
    var aKey = a[0]
      , aValue = a[1]
      , bKey = b[0]
      , bValue = b[1];

    // if the values are the same, break ties using the key
    if (aValue == bValue) {
      return aKey.localeCompare(bKey);
    } else {
      return aValue > bValue ? -1 : 1;
    }
  },

  unicodeBlockName: function (unicode, blockCount) {
    if (unicode <= dbUnicodeBlocks[0][1]) {
      return dbUnicodeBlocks[0];
    }

    var high = blockCount ? blockCount - 1 : dbUnicodeBlocks.length
      , low = 1
      , mid;

    while (low <= high) {
      mid = Math.floor((low + high) / 2);

      if (unicode < dbUnicodeBlocks[mid][0]) {
        high = mid - 1;
      } else if (unicode > dbUnicodeBlocks[mid][1]) {
        low = mid + 1;
      } else {
        return dbUnicodeBlocks[mid];
      }
    }

    return -1;
  }
};