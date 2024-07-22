# Node Language Detect
[![Travis (.org)](https://img.shields.io/travis/FGRibreau/node-language-detect)](http://travis-ci.org/FGRibreau/node-language-detect)
[![David](https://img.shields.io/david/FGRibreau/node-language-detect)](https://david-dm.org/FGRibreau/node-language-detect)
[![npm](https://img.shields.io/npm/v/languagedetect)](https://www.npmjs.com/package/languagedetect)
[![npm](https://img.shields.io/npm/dw/languagedetect)](https://www.npmjs.com/package/languagedetect)
[![node](https://img.shields.io/node/v/languagedetect)](https://www.npmjs.com/package/languagedetect)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/languagedetect)](https://www.npmjs.com/package/languagedetect)
[![Get help on Codementor](https://img.shields.io/badge/codementor-get%20help-blue.svg)](https://www.codementor.io/francois-guillaume-ribreau?utm_source=github&utm_medium=button&utm_term=francois-guillaume-ribreau&utm_campaign=github)
[![Twitter Follow](https://img.shields.io/twitter/follow/FGRibreau?style=social)](https://twitter.com/FGRibreau)

![npm](https://nodei.co/npm/languagedetect.png)

`LanguageDetect` is a port of the [PEAR::Text_LanguageDetect](http://pear.php.net/package/Text_LanguageDetect) for [node.js](http://nodejs.org).

LanguageDetect can identify 52 human languages from text samples and return confidence scores for each.

### Installation
This package can be installed via [npm](http://npmjs.org/) as follows
```shell
npm install languagedetect --save
```
### Example
```javascript
const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();

// OR
// const lngDetector = new (require('languagedetect'));

console.log(lngDetector.detect('This is a test.'));

/*
  [ [ 'english', 0.5969230769230769 ],
  [ 'hungarian', 0.407948717948718 ],
  [ 'latin', 0.39205128205128204 ],
  [ 'french', 0.367948717948718 ],
  [ 'portuguese', 0.3669230769230769 ],
  [ 'estonian', 0.3507692307692307 ],
  [ 'latvian', 0.2615384615384615 ],
  [ 'spanish', 0.2597435897435898 ],
  [ 'slovak', 0.25051282051282053 ],
  [ 'dutch', 0.2482051282051282 ],
  [ 'lithuanian', 0.2466666666666667 ],
  ... ]
*/

// Only get the first 2 results
console.log(lngDetector.detect('This is a test.', 2));

/*
  [ [ 'english', 0.5969230769230769 ], [ 'hungarian', 0.407948717948718 ] ]
*/
```

### API
* `detect(sample, limit)` Detects the closeness of a sample of text to the known languages
* `getLanguages()` Returns the list of detectable languages
* `getLanguageCount()` Returns the number of languages that the lib can detect
* `setLanguageType(format)` Sets the language format to be used. Suported values:
  * `iso2`, resulting in two letter language format
  * `iso3`, resulting in three letter language format
  * Any other value results in the full language name
### Benchmark
* `node.js` 1000 items processed in 1.277 secs (482 with a score > 0.2)
* `PHP` 1000 items processed in 4.835 secs (535 with a score > 0.2)

### Credits
Nicholas Pisarro for his work on [PEAR::Text_LanguageDetect](http://pear.php.net/package/Text_LanguageDetect)

### License
Copyright (c) 2013, Francois-Guillaume Ribreau <node@fgribreau.com>, Ruslan Zavackiy <ruslan@zavackiy.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
