# Tesseract OCR for Node.js

[![Build Status](https://img.shields.io/travis/zapolnoch/node-tesseract-ocr/master.svg?style=flat-square)](https://travis-ci.org/zapolnoch/node-tesseract-ocr)
[![npm](https://img.shields.io/npm/v/node-tesseract-ocr.svg?style=flat-square)](https://www.npmjs.com/package/node-tesseract-ocr)
[![npm](https://img.shields.io/npm/dm/node-tesseract-ocr.svg?style=flat-square)](https://www.npmjs.com/package/node-tesseract-ocr)
[![Known Vulnerabilities](https://snyk.io/test/github/zapolnoch/node-tesseract-ocr/badge.svg)](https://snyk.io/test/github/zapolnoch/node-tesseract-ocr)

## Installation

First, you need to install the Tesseract project. Instructions for installing Tesseract for all platforms can be found on [the project site](https://github.com/tesseract-ocr/tessdoc/blob/master/Installation.md). On Debian/Ubuntu:

```bash
apt-get install tesseract-ocr
```

After you've installed Tesseract, you can go installing the npm-package:

```bash
npm install node-tesseract-ocr
```

## Usage

```js
const tesseract = require("node-tesseract-ocr")

const config = {
  lang: "eng",
  oem: 1,
  psm: 3,
}

tesseract
  .recognize("image.jpg", config)
  .then((text) => {
    console.log("Result:", text)
  })
  .catch((error) => {
    console.log(error.message)
  })
```

Also you can pass Buffer:

```js
const img = fs.readFileSync("image.jpg")

tesseract
  .recognize(img, config)
  .then((text) => {
    console.log("Result:", text)
  })
  .catch((error) => {
    console.log(error.message)
  })
```

or URL:

```js
const img = "https://tesseract.projectnaptha.com/img/eng_bw.png"

tesseract
  .recognize(img, config)
  .then((text) => {
    console.log("Result:", text)
  })
  .catch((error) => {
    console.log(error.message)
  })
```

If you want to process multiple images in a single run, then pass an array:

```js
const images = ["./test/samples/file1.png", "./test/samples/file2.png"]

tesseract
  .recognize(images, config)
  .then((text) => {
    console.log("Result:", text)
  })
  .catch((error) => {
    console.log(error.message)
  })
```

In the config object you can pass any [OCR options](https://github.com/tesseract-ocr/tesseract/blob/master/doc/tesseract.1.asc#options). Also you can pass here any [control parameters](https://tesseract-ocr.github.io/tessdoc/tess3/ControlParams) or use ready-made sets of [config files](https://github.com/tesseract-ocr/tesseract/tree/master/tessdata/configs) (like hocr):

```js
const result = await tesseract.recognize("image.jpg", {
  load_system_dawg: 0,
  tessedit_char_whitelist: "0123456789",
  presets: ["tsv"],
})
```
