# DeepAI JS Client
[![npm version](https://img.shields.io/npm/v/deepai.svg?style=flat-square)](https://www.npmjs.org/package/deepai)

Simple Javascript Client Library for [Deep AI's](https://deepai.org) APIs from Browser and Node.js

## Installation:

Node.js or other environments using npm:
```bash
npm install --save deepai
```

Browser:
* Option 1: (Recommended) Load the library from DeepAI's CDN:
    ```
    <script src="https://cdnjs.deepai.org/deepai.min.js"></script>
    ```
* Option 2: Download and copy "dist/deepai.min.js" into your project and include in HTML
* Option 3: include this npm package, use [webpack](https://webpack.js.org/) or [browserify](http://browserify.org/), and "require('deepai'')"

## Usage Examples:
Most examples are for [Content Moderation](https://deepai.org/machine-learning-model/content-moderation), but you can subsitute any model name available at DeepAI.

Ensure that you pass the correct input names. Not all model input names are "image". You can find the correct input name on the page for each model at [DeepAI.org](https://deepai.org)

All examples use [Async-Await](https://javascript.info/async-await) syntax, so ensure you run the code in an async function.

#### Browser:
```js
// Ensure you load deepai with one of the methods in "Installation"
deepai.setApiKey('YOUR_API_KEY'); // get your free API key at https://deepai.org
```


Pass URL:
```js
var result = await deepai.callStandardApi("content-moderation", {
    image: "https://YOUR_IMAGE_URL"
});
```

Pass Literal Text:
```js
var result = await deepai.callStandardApi("sentiment-analysis", {
    text: "I am very happy to play with the newest APIs!"
});
```


Pass Image DOM Element:
```js
var result = await deepai.callStandardApi("content-moderation", {
    image: document.getElementById('yourImageId')
});
```
Pass [File Picker](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file) Element:
```js
var result = await deepai.callStandardApi("content-moderation", {
    image: document.getElementById('yourFilePickerId')
});
```


##### Browser Result Rendering

This code will render the result of the API call into an existing HTML element, such as a div, with the id "yourResultContainerId".

The result will fit itself inside your container, so be sure to set a size on it.


```js
var result = await deepai.callStandardApi("content-moderation", {
    image: "https://YOUR_IMAGE_URL"
});

await deepai.renderResultIntoElement(result, document.getElementById('yourResultContainerId'));

```


##### Rendering a result without an extra network request:

The function renderAnnotatedResultIntoElement is for advanced users only.

```js
var resultAnnotated = {
    output_url: <Pass URL of the model output>
    output: <Pass the model output directly in case of JSON or text output>
    id: "fa616aa1-c762-4c98-b44e-75781627974a" <pass your job ID>
    inputs:[
        {
            is_img: true,
            url: (relative or absolute img url, annotations will be rendered on top of this result url.)
        }
    ],
    visualizer_data: {
        list_key: 'Objects', (Name of the list property containing annotations)
        label_key: 'Object' (Name of the value property to label annotations with)
    }, 
    scale_applied: 1.333 (Scale to multiply all detection x y coordinates by before rendering)
};

deepai.renderAnnotatedResultIntoElement(resultAnnotated, document.getElementById('yourResultContainerId'));

```


#### Node.js

```js
const deepai = require('deepai');
deepai.setApiKey('YOUR_API_KEY'); // get your free API key at https://deepai.org
```


Pass URL:
```js
var result = await deepai.callStandardApi("content-moderation", {
    image: "https://YOUR_IMAGE_URL"
});
```

Pass Literal Text:
```js
var result = await deepai.callStandardApi("sentiment-analysis", {
    text: "I am very happy to play with the newest APIs!"
});
```

Pass File Upload:
```js
const fs = require('fs');

<...>

var result = await deepai.callStandardApi("content-moderation", {
    image: fs.createReadStream('/path/to/your/file.jpg')
});
```


## Build & publish this library (not required for users of this libary): 

```bash
npm install
npm run-script build
npm login
npm publish
```
