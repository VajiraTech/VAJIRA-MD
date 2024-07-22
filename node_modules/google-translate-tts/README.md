google-translate-tts
---

This package is for using Google Translate to create audio clips in node js.

This library has been updated to work with the [new
changes](https://github.com/Boudewijn26/gTTS-token/blob/master/docs/november-2020-translate-changes.md)
to the Translate API introduced by Google in November 2020.

A spiritual successor to [google-tts-api](https://github.com/zlargon/google-tts)
which worked with the previous Translate API.

## Installation

```
npm install google-translate-tts
```

or

```
yarn add google-translate-tts
```

## Usage

Find a voice to use:

```js
const tts = require('google-translate-tts');

// lookup by name
const voice = tts.voices.findByName('English (United States)');

// lookup by code
const voice = tts.voices.findByCode('en-US');

// an array of all voices
console.log(tts.voices);

/* Voice example:
 * {
 *   code: 'en-US',
 *   name: 'English (United States)'
 * }
 */
```

Download an audio clip:

```js
const fs = require('fs');
const tts = require('google-translate-tts');

// notice that `tts.synthesize` returns a Promise<Buffer>
const saveFile = async () => {
    const buffer = await tts.synthesize({
        text: 'Hello, world!',
        voice: 'en-US',
        slow: false // optional
    });

    fs.writeFileSync('hello-world.mp3', buffer);
};

saveFile();
```
