'use strict';

var utils = require('./utils');
var DeepAI = require('./core/DeepAI');
var defaults = require('./defaults');
var bind = require('./helpers/bind');


/**
 * Create an instance of DeepAI
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {DeepAI} A new instance of DeepAI
 */
function createInstance(defaultConfig) {
    var context = new DeepAI(defaultConfig);
    var instance = bind(DeepAI.prototype.request, context);

    // Copy deepai.prototype to instance
    utils.extend(instance, DeepAI.prototype, context);

    // Copy context to instance
    utils.extend(instance, context);

    return instance;
}

// Create the default instance to be exported
var deepai = createInstance(defaults);

// Expose DeepAI class to allow class inheritance
deepai.DeepAI = DeepAI;

// Factory for creating new instances
deepai.create = function create(instanceConfig) {
    return createInstance(mergeConfig(deepai.defaults, instanceConfig));
};

module.exports = deepai;

// Allow use of default import syntax in TypeScript
module.exports.default = deepai;
