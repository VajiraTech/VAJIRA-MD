/**
 *
 * Detects the language of a given piece of text.
 *
 * Attempts to detect the language of a sample of text by correlating ranked
 * 3-gram frequencies to a table of 3-gram frequencies of known languages.
 *
 * Implements a version of a technique originally proposed by Cavnar & Trenkle
 * (1994): "N-Gram-Based Text Categorization"
 *
 * Largely inspired from the PHP Pear Package Text_LanguageDetect by Nicholas Pisarro
 * Licence: http://www.debian.org/misc/bsd.license BSD
 *
 * @author Francois-Guillaume Ribreau - @FGRibreau
 * @author Ruslan Zavackiy - @Chaoser
 *
 * @see https://github.com/FGRibreau/node-language-detect
 *
 * Installation:
 *  npm install LanguageDetect
 *
 * @example
 * <code>
 * var LanguageDetect = require("../LanguageDetect");
 * var d = new LanguageDetect().detect('This is a test');
 * // d[0] == 'english'
 * // d[1] == 0.5969230769230769
 * // Good score are over 0.3
 * </code>
 */

var dbLang = require('../data/lang.json')
  , Parser = require('./Parser')
  , ISO639 = require('./ISO639');

var LanguageDetect = module.exports = function (languageType) {

  /**
   * The trigram data for comparison
   *
   * Will be loaded on start from $this->_db_filename
   *
   * May be set to a PEAR_Error object if there is an error during its
   * initialization
   *
   * @var      array
   * @access   private
   */
  this.langDb = {};

  /**
   * The size of the trigram data arrays
   *
   * @var     int
   * @access  private
   */
  this.threshold = 300;

  this.useUnicodeNarrowing = true;

  /**
   * Constructor
   *
   * Load the language database.
   *
   */
  this.langDb = dbLang['trigram'];
  this.unicodeMap = dbLang['trigram-unicodemap'];

  this.languageType = languageType || null;
};

LanguageDetect.prototype = {

  /**
   * Returns the number of languages that this object can detect
   *
   * @access public
   * @return int the number of languages
   */
  getLanguageCount:function () {
    return this.getLanguages().length;
  },

  setLanguageType:function (type) {
    return this.languageType = type;
  },

  /**
   * Returns the list of detectable languages
   *
   * @access public
   * @return object the names of the languages known to this object
   */
  getLanguages:function () {
    return Object.keys(this.langDb);
  },

  /**
   * Calculates a linear rank-order distance statistic between two sets of
   * ranked trigrams
   *
   * Sums the differences in rank for each trigram. If the trigram does not
   * appear in both, consider it a difference of $this->_threshold.
   *
   * This distance measure was proposed by Cavnar & Trenkle (1994). Despite
   * its simplicity it has been shown to be highly accurate for language
   * identification tasks.
   *
   * @access  private
   * @param   arr1  the reference set of trigram ranks
   * @param   arr2  the target set of trigram ranks
   * @return  int   the sum of the differences between the ranks of
   *                the two trigram sets
   */
  distance:function (arr1, arr2) {
    var me = this
      , sumdist = 0
      , keys = Object.keys(arr2)
      , i;

    for (i = keys.length; i--;) {
      sumdist += arr1[keys[i]] ? Math.abs(arr2[keys[i]] - arr1[keys[i]]) : me.threshold;
    }

    return sumdist;
  },

  /**
   * Normalizes the score returned by _distance()
   *
   * Different if perl compatible or not
   *
   * @access  private
   * @param   score       the score from _distance()
   * @param   baseCount   the number of trigrams being considered
   * @return  number      the normalized score
   *
   * @see     distance()
   */
  normalizeScore:function (score, baseCount) {
    return 1 - (score / (baseCount || this.threshold) / this.threshold);
  },

  /**
   * Detects the closeness of a sample of text to the known languages
   *
   * Calculates the statistical difference between the text and
   * the trigrams for each language, normalizes the score then
   * returns results for all languages in sorted order
   *
   * If perl compatible, the score is 300-0, 0 being most similar.
   * Otherwise, it's 0-1 with 1 being most similar.
   *
   * The $sample text should be at least a few sentences in length;
   * should be ascii-7 or utf8 encoded, if another and the mbstring extension
   * is present it will try to detect and convert. However, experience has
   * shown that mb_detect_encoding() *does not work very well* with at least
   * some types of encoding.
   *
   * @access  public
   * @param   sample  a sample of text to compare.
   * @param   limit  if specified, return an array of the most likely
   *                  $limit languages and their scores.
   * @return  Array   sorted array of language scores, blank array if no
   *                  useable text was found, or PEAR_Error if error
   *                  with the object setup
   *
   * @see     distance()
   */
  detect:function (sample, limit) {
    var me = this
      , scores = [];

    limit = +limit || 0;

    if (sample == '' || String(sample).length < 3) return [];

    var sampleObj = new Parser(sample);
    sampleObj.setPadStart(true);
    sampleObj.analyze();

    var trigramFreqs = sampleObj.getTrigramRanks()
      , trigramCount = Object.keys(trigramFreqs).length;

    if (trigramCount == 0) return [];

    var keys = [], i, lang;

    if (this.useUnicodeNarrowing) {
      var blocks = sampleObj.getUnicodeBlocks()
        , languages = Object.keys(blocks)
        , keysLength = languages.length;

      for (i = keysLength; i--;) {
        if (this.unicodeMap[languages[i]]) {
          for (lang in this.unicodeMap[languages[i]]) {
            if (!~keys.indexOf(lang)) keys.push(lang);
          }
        }
      }
    } else {
      keys = me.getLanguages();
    }

    for (i = keys.length; i--;) {
      var score = me.normalizeScore(me.distance(me.langDb[keys[i]], trigramFreqs), trigramCount);
      if (score) scores.push([keys[i], score]);
    }

    // Sort the array
    scores.sort(function (a, b) { return b[1] - a[1]; });
    var scoresLength = scores.length;

    if (!scoresLength) return [];

    switch (me.languageType) {
      case 'iso2':
        for (i = scoresLength; i--;) {
          scores[i][0] = ISO639.getCode2(scores[i][0]);
        }
        break;
      case 'iso3':
        for (i = scoresLength; i--;) {
          scores[i][0] = ISO639.getCode3(scores[i][0]);
        }
        break;
    }

    // limit the number of returned scores
    return limit > 0 ? scores.slice(0, limit) : scores;
  }
};
