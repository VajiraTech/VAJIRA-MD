Meme Maker
==========

**[Meme Maker](https://www.npmjs.com/package/meme-maker)** is a package that allows you to quickly, and easily, generate memes such as the one below:

![Example of meme created with Meme Maker](http://i.imgur.com/2s8NYvM.png)

**You must have [graphicsmagick](http://www.graphicsmagick.org/index.html) installed for this package to work.**

Install
-------

    npm install meme-maker --save

Usage
-----

Using Meme Maker is easy!

```
let memeMaker = require('meme-maker')

let options = {
  image: 'spiderman.png',         // Required
  outfile: 'spiderman-meme.png',  // Required
  topText: 'TODAY IM',            // Required
  bottomText: 'AN ASS',           // Optional
  font: '/path/to/font.ttf',      // Optional
  fontSize: 50,                   // Optional
  fontFill: '#FFF',               // Optional
  textPos: 'center',              // Optional
  strokeColor: '#000',            // Optional
  strokeWeight: 2                 // Optional
}

memeMaker(options, function(err) {
  if(e) throw new Error(err)
  console.log('Image saved: ' + options.outfile)
});
```

`memeMaker` accepts an options object as it's first paramater and a
callback function as its second paramater. Upon success an image is created
at the location specified in the `options.outfile` property.

Default Values
--------------

The following options have default values set:

* **outfile:** Randomly generated filename
* **font:** impact.ttf
* **fontSize:** 100
* **fontFill:** #FFF
* **textPos:** center
* **strokeColor:** #000
* **strokeWeight:** 2
