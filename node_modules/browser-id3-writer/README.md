# Browser ID3 Writer

[![npm package][npm-badge]][npm] [![Travis][build-badge]][build]

[build-badge]: https://img.shields.io/travis/com/egoroof/browser-id3-writer/master.svg?style=flat-square
[build]: https://travis-ci.com/egoroof/browser-id3-writer

[npm-badge]: https://img.shields.io/npm/v/browser-id3-writer.svg?style=flat-square
[npm]: https://www.npmjs.com/package/browser-id3-writer

Pure JS library for writing [ID3 (v2.3)](http://id3.org/id3v2.3.0) tag to MP3 files in browsers and Node.js.
It can't read the tag so use another lib to do it.

**Note**: the library removes existing ID3 tag (v2.2, v2.3 and v2.4).

Works in Node.js 4+, IE10+ and all modern browsers.

Here is an online demonstration: [egoroof.ru/browser-id3-writer/](https://egoroof.ru/browser-id3-writer/)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Browser](#browser)
    1. [Get ArrayBuffer of song](#get-arraybuffer-of-song)
    2. [Add a tag](#add-a-tag)
    3. [Save file](#save-file)
    4. [Memory control](#memory-control)
  - [Node.js](#nodejs)
- [Supported frames](#supported-frames)
- [APIC picture types](#apic-picture-types)

## Installation

Take latest version [here](https://unpkg.com/browser-id3-writer) or with npm:

```
npm install browser-id3-writer --save
```

## Usage

### Browser

#### Get ArrayBuffer of song

In browsers you should first get
[ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
of the song you would like to add ID3 tag.

##### FileReader

For example you can create file input and use
[FileReader](https://developer.mozilla.org/en-US/docs/Web/API/FileReader):

```html
<input type="file" id="file" accept="audio/mpeg">
<script>
    document.getElementById('file').addEventListener('change', function () {
        if (this.files.length === 0) {
            return;
        }
        const reader = new FileReader();
        reader.onload = function () {
            const arrayBuffer = reader.result;
            // go next
        };
        reader.onerror = function () {
            // handle error
            console.error('Reader error', reader.error);
        };
        reader.readAsArrayBuffer(this.files[0]);
    });
</script>
```

##### XMLHttpRequest

To get arrayBuffer from remote server you can use
[XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest):

```js
const xhr = new XMLHttpRequest();
xhr.open('GET', urlToSongFile, true);
xhr.responseType = 'arraybuffer';
xhr.onload = function () {
    if (xhr.status === 200) {
        const arrayBuffer = xhr.response;
        // go next
    } else {
        // handle error
        console.error(xhr.statusText + ' (' + xhr.status + ')');
    }
};
xhr.onerror = function() {
    // handle error
    console.error('Network error');
};
xhr.send();
```

#### Add a tag

Create new `ID3Writer` instance with arrayBuffer of your song, set frames and add a tag:

```js
// arrayBuffer of song or empty arrayBuffer if you just want only id3 tag without song
const writer = new ID3Writer(arrayBuffer);
writer.setFrame('TIT2', 'Home')
      .setFrame('TPE1', ['Eminem', '50 Cent'])
      .setFrame('TALB', 'Friday Night Lights')
      .setFrame('TYER', 2004)
      .setFrame('TRCK', '6/8')
      .setFrame('TCON', ['Soundtrack'])
      .setFrame('TBPM', 128)
      .setFrame('WPAY', 'https://google.com')
      .setFrame('TKEY', 'Fbm')
      .setFrame('APIC', {
          type: 3,
          data: coverArrayBuffer,
          description: 'Super picture'
      });
writer.addTag();
```

#### Save file

Now you can save it to file as you want:

```js
const taggedSongBuffer = writer.arrayBuffer;
const blob = writer.getBlob();
const url = writer.getURL();
```

For example you can save file using [FileSaver.js](https://github.com/eligrey/FileSaver.js/):

```js
saveAs(blob, 'song with tags.mp3');
```

If you are writing chromium extension you can save file using
[Downloads API](https://developer.chrome.com/extensions/downloads):

```js
chrome.downloads.download({
    url: url,
    filename: 'song with tags.mp3'
});
```

#### Memory control

When you generate URLs via `writer.getURL()` you should know
that whole file is kept in memory until you close the page or move to another one.
So if you generate lots of URLs in a single page you should manually free memory
after you finish downloading file:

```js
URL.revokeObjectURL(url); // if you know url or
writer.revokeURL(); // if you have access to writer
```

### Node.js

Simple example with blocking IO:

```js
const ID3Writer = require('browser-id3-writer');
const fs = require('fs');

const songBuffer = fs.readFileSync('path_to_song.mp3');
const coverBuffer = fs.readFileSync('path_to_cover.jpg');

const writer = new ID3Writer(songBuffer);
writer.setFrame('TIT2', 'Home')
      .setFrame('TPE1', ['Eminem', '50 Cent'])
      .setFrame('TALB', 'Friday Night Lights')
      .setFrame('TYER', 2004)
      .setFrame('APIC', {
          type: 3,
          data: coverBuffer,
          description: 'Super picture'
      });
writer.addTag();

const taggedSongBuffer = Buffer.from(writer.arrayBuffer);
fs.writeFileSync('song_with_tags.mp3', taggedSongBuffer);
```

You can also create only ID3 tag without song and use it as you want:

```js
const writer = new ID3Writer(Buffer.alloc(0));
writer.padding = 0; // default 4096
writer.setFrame('TIT2', 'Home');
writer.addTag();
const id3Buffer = Buffer.from(writer.arrayBuffer);
```

## Supported frames

**array of strings:**

- TPE1 (song artists)
- TCOM (song composers)
- TCON (song genres)

**string**

- TLAN (language)
- TIT1 (content group description)
- TIT2 (song title)
- TIT3 (song subtitle)
- TALB (album title)
- TPE2 (album artist)
- TPE3 (conductor/performer refinement)
- TPE4 (interpreted, remixed, or otherwise modified by)
- TRCK (song number in album): '5' or '5/10'
- TPOS (album disc number): '1' or '1/3'
- TPUB (label name)
- TKEY (initial key)
- TMED (media type)
- TSRC (isrc - international standard recording code)
- TCOP (copyright message)
- TEXT (lyricist / text writer)
- WCOM (commercial information)
- WCOP (copyright/Legal information)
- WOAF (official audio file webpage)
- WOAR (official artist/performer webpage)
- WOAS (official audio source webpage)
- WORS (official internet radio station homepage)
- WPAY (payment)
- WPUB (publishers official webpage)

**integer**

- TLEN (song duration in milliseconds)
- TDAT (album release date expressed as DDMM)
- TYER (album release year)
- TBPM (beats per minute)

**object**

- COMM (comments):

```js
writer.setFrame('COMM', {
    description: 'description here',
    text: 'text here',
    language: 'eng'
});
```

- USLT (unsychronised lyrics):

```js
writer.setFrame('USLT', {
    description: 'description here',
    lyrics: 'lyrics here',
    language: 'eng'
});
```

- TXXX (user defined text):

```js
writer.setFrame('TXXX', {
    description: 'description here',
    value: 'value here'
});
```

- PRIV (private frame):

```js
writer.setFrame('PRIV', {
    id: 'identifier',
    data: dataArrayBuffer
});
```

- APIC (attached picture):

```js
writer.setFrame('APIC', {
    type: 3,
    data: coverArrayBuffer,
    description: 'description here',
    useUnicodeEncoding: false
});
```

`useUnicodeEncoding` should only be `true` when description contains non-Western characters.
When it's set to `true` some program might not be able to read the picture correctly.
See [#42](https://github.com/egoroof/browser-id3-writer/issues/42).

## APIC picture types

| Type | Name                                |
|------|-------------------------------------|
| 0    | Other                               |
| 1    | 32x32 pixels 'file icon' (PNG only) |
| 2    | Other file icon                     |
| 3    | Cover (front)                       |
| 4    | Cover (back)                        |
| 5    | Leaflet page                        |
| 6    | Media (e.g. lable side of CD)       |
| 7    | Lead artist/lead performer/soloist  |
| 8    | Artist/performer                    |
| 9    | Conductor                           |
| 10   | Band/Orchestra                      |
| 11   | Composer                            |
| 12   | Lyricist/text writer                |
| 13   | Recording Location                  |
| 14   | During recording                    |
| 15   | During performance                  |
| 16   | Movie/video screen capture          |
| 17   | A bright coloured fish              |
| 18   | Illustration                        |
| 19   | Band/artist logotype                |
| 20   | Publisher/Studio logotype           |
