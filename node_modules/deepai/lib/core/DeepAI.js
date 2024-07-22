'use strict';

var utils = require('./../utils');
const axios = require('axios');
const formData = require('form-data');
// const Buffer = require('buffer/').Buffer; // note: the trailing slash is important!

const apiBaseUrl = require('./apiBaseUrl').baseUrl;
const resultRendering = require('./resultRendering');

const globalObject = Function('return this')();

/**
 * Create a new instance of DeepAI
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function DeepAI(instanceConfig) {
    this.defaults = instanceConfig;
    axios.defaults.headers.common['client-library'] = 'deepai-js-client';
}

DeepAI.prototype.setApiKey = function (apiKey) {
    this.apiKey = apiKey;
    axios.defaults.headers.common['api-key'] = apiKey;
};

function urlForModel(model_name) {
    return apiBaseUrl+"/api/" + model_name;
}


DeepAI.prototype.callStandardApi = async function request(model_name, inputs_object) {

    const form = new formData();
    for (var key of Object.keys(inputs_object)) {
        // Second argument  can take Buffer or Stream (lazily read during the request) too.
        // Third argument is filename if you want to simulate a file upload. Otherwise omit.
        if (inputs_object[key] === null || inputs_object[key] === undefined) {
            continue; // Input is blank, that is allowed sometimes.
        }

        if (typeof inputs_object[key] === 'string') {
            form.append(key, inputs_object[key]); // a string could be a URL or just some text data. both are OK
        } else if (globalObject.Element && inputs_object[key] instanceof globalObject.Element) {
            var element = inputs_object[key];
            if (element.tagName === 'IMG') {
                // got an IMG dom node element

                if (element.src) {
                    // pass the src url
                    form.append(key, element.src);

                    // TODO do something about data URLs
                    // TODO do something about blob URLs

                } else {
                    throw new Error("DeepAI error: Image element has no SRC: " + key);
                }
            } else if (element.tagName === 'INPUT' && element.files !== undefined) {
                // got a file picker
                if (element.files.length > 0) {
                    form.append(key, element.files[0], 'file.jpeg');
                } else {
                    throw new Error("DeepAI error: File picker has no file picked: " + key);
                }
            } else {
                throw new Error("DeepAI error: DOM Element type for key: " + key);
            }
        } else if (inputs_object[key].hasOwnProperty('fd')) {
            // Seems to be a nodejs stream.
            form.append(key, inputs_object[key]); // form-data in nodejs can handle this
        } else if (globalObject.Buffer && Buffer.isBuffer(inputs_object[key])) {
            form.append(key, inputs_object[key], 'file.jpeg'); // form-data in nodejs can handle this
        } else {
            throw new Error("DeepAI error: unknown input type for key: " + key);
        }
        // TODO do filenames need to be unique?

    }

    var req_options = {
        withCredentials: true
    };
    if (form.getHeaders !== undefined) {
        // formData is the nodejs based subsitute, only needed for node.js
        req_options.headers = form.getHeaders();
    }
    const response = await axios.post(urlForModel(model_name), form, req_options);
    return response.data;

};

DeepAI.prototype.renderResultIntoElement = resultRendering.renderResultIntoElement;
DeepAI.prototype.renderAnnotatedResultIntoElement = resultRendering.renderAnnotatedResultIntoElement;

module.exports = DeepAI;
