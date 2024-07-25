'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var stream = _interopDefault(require('stream'));
var os = _interopDefault(require('os'));

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol$1 = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var lodash_get = get;

function getProp(obj, path, defaultValue) {
  return obj[path] === undefined ? defaultValue : obj[path];
}

function setProp(obj, path, value) {
  var pathArray = Array.isArray(path) ? path : path.split('.');
  var key = pathArray[0];
  var newValue = pathArray.length > 1 ? setProp(obj[key] || {}, pathArray.slice(1), value) : value;
  return Object.assign({}, obj, _defineProperty({}, key, newValue));
}

function flattenReducer(acc, arr) {
  try {
    // This is faster but susceptible to `RangeError: Maximum call stack size exceeded`
    acc.push.apply(acc, _toConsumableArray(arr));
    return acc;
  } catch (err) {
    // Fallback to a slower but safer option
    return acc.concat(arr);
  }
}

function fastJoin(arr, separator) {
  var isFirst = true;
  return arr.reduce(function (acc, elem) {
    if (elem === null || elem === undefined) {
      elem = '';
    }

    if (isFirst) {
      isFirst = false;
      return "".concat(elem);
    }

    return "".concat(acc).concat(separator).concat(elem);
  }, '');
}

var utils = {
  getProp: getProp,
  setProp: setProp,
  fastJoin: fastJoin,
  flattenReducer: flattenReducer
};

var getProp$1 = utils.getProp,
    setProp$1 = utils.setProp,
    fastJoin$1 = utils.fastJoin,
    flattenReducer$1 = utils.flattenReducer;

var JSON2CSVBase =
/*#__PURE__*/
function () {
  function JSON2CSVBase(opts) {
    _classCallCheck(this, JSON2CSVBase);

    this.opts = this.preprocessOpts(opts);
    this.preprocessRow = this.memoizePreprocessRow();
  }
  /**
   * Check passing opts and set defaults.
   *
   * @param {Json2CsvOptions} opts Options object containing fields,
   * delimiter, default value, quote mark, header, etc.
   */


  _createClass(JSON2CSVBase, [{
    key: "preprocessOpts",
    value: function preprocessOpts(opts) {
      var processedOpts = Object.assign({}, opts);
      processedOpts.unwind = !Array.isArray(processedOpts.unwind) ? processedOpts.unwind ? [processedOpts.unwind] : [] : processedOpts.unwind;
      processedOpts.delimiter = processedOpts.delimiter || ',';
      processedOpts.flattenSeparator = processedOpts.flattenSeparator || '.';
      processedOpts.eol = processedOpts.eol || os.EOL;
      processedOpts.quote = typeof processedOpts.quote === 'string' ? opts.quote : '"';
      processedOpts.doubleQuote = typeof processedOpts.doubleQuote === 'string' ? processedOpts.doubleQuote : processedOpts.quote + processedOpts.quote;
      processedOpts.header = processedOpts.header !== false;
      processedOpts.includeEmptyRows = processedOpts.includeEmptyRows || false;
      processedOpts.withBOM = processedOpts.withBOM || false;
      return processedOpts;
    }
    /**
     * Check and normalize the fields configuration.
     *
     * @param {(string|object)[]} fields Fields configuration provided by the user
     * or inferred from the data
     * @returns {object[]} preprocessed FieldsInfo array
     */

  }, {
    key: "preprocessFieldsInfo",
    value: function preprocessFieldsInfo(fields) {
      var _this = this;

      return fields.map(function (fieldInfo) {
        if (typeof fieldInfo === 'string') {
          return {
            label: fieldInfo,
            value: fieldInfo.includes('.') || fieldInfo.includes('[') ? function (row) {
              return lodash_get(row, fieldInfo, _this.opts.defaultValue);
            } : function (row) {
              return getProp$1(row, fieldInfo, _this.opts.defaultValue);
            },
            stringify: true
          };
        }

        if (_typeof(fieldInfo) === 'object') {
          var defaultValue = 'default' in fieldInfo ? fieldInfo.default : _this.opts.defaultValue;

          if (typeof fieldInfo.value === 'string') {
            return {
              label: fieldInfo.label || fieldInfo.value,
              value: fieldInfo.value.includes('.') || fieldInfo.value.includes('[') ? function (row) {
                return lodash_get(row, fieldInfo.value, defaultValue);
              } : function (row) {
                return getProp$1(row, fieldInfo.value, defaultValue);
              },
              stringify: fieldInfo.stringify !== undefined ? fieldInfo.stringify : true
            };
          }

          if (typeof fieldInfo.value === 'function') {
            var label = fieldInfo.label || fieldInfo.value;
            var field = {
              label: label,
              default: defaultValue
            };
            return {
              label: label,
              value: function value(row) {
                var value = fieldInfo.value(row, field);
                return value === null || value === undefined ? defaultValue : value;
              },
              stringify: fieldInfo.stringify !== undefined ? fieldInfo.stringify : true
            };
          }
        }

        throw new Error('Invalid field info option. ' + JSON.stringify(fieldInfo));
      });
    }
    /**
     * Create the title row with all the provided fields as column headings
     *
     * @returns {String} titles as a string
     */

  }, {
    key: "getHeader",
    value: function getHeader() {
      var _this2 = this;

      return fastJoin$1(this.opts.fields.map(function (fieldInfo) {
        return _this2.processValue(fieldInfo.label, true);
      }), this.opts.delimiter);
    }
  }, {
    key: "memoizePreprocessRow",
    value: function memoizePreprocessRow() {
      if (this.opts.unwind && this.opts.unwind.length) {
        if (this.opts.flatten) {
          return function (row) {
            var _this3 = this;

            return this.unwindData(row, this.opts.unwind).map(function (row) {
              return _this3.flatten(row, _this3.opts.flattenSeparator);
            });
          };
        }

        return function (row) {
          return this.unwindData(row, this.opts.unwind);
        };
      }

      if (this.opts.flatten) {
        return function (row) {
          return [this.flatten(row, this.opts.flattenSeparator)];
        };
      }

      return function (row) {
        return [row];
      };
    }
    /**
     * Preprocess each object according to the give opts (unwind, flatten, etc.).
     * The actual body of the function is dynamically set on the constructor by the
     *  `memoizePreprocessRow` method after parsing the options.
     *
     * @param {Object} row JSON object to be converted in a CSV row
     */

  }, {
    key: "preprocessRow",
    value: function preprocessRow() {}
    /**
     * Create the content of a specific CSV row
     *
     * @param {Object} row JSON object to be converted in a CSV row
     * @returns {String} CSV string (row)
     */

  }, {
    key: "processRow",
    value: function processRow(row) {
      var _this4 = this;

      if (!row) {
        return undefined;
      }

      var processedRow = this.opts.fields.map(function (fieldInfo) {
        return _this4.processCell(row, fieldInfo);
      });

      if (!this.opts.includeEmptyRows && processedRow.every(function (field) {
        return field === undefined;
      })) {
        return undefined;
      }

      return fastJoin$1(processedRow, this.opts.delimiter);
    }
    /**
     * Create the content of a specfic CSV row cell
     *
     * @param {Object} row JSON object representing the  CSV row that the cell belongs to
     * @param {FieldInfo} fieldInfo Details of the field to process to be a CSV cell
     * @returns {String} CSV string (cell)
     */

  }, {
    key: "processCell",
    value: function processCell(row, fieldInfo) {
      return this.processValue(fieldInfo.value(row), fieldInfo.stringify);
    }
    /**
     * Create the content of a specfic CSV row cell
     *
     * @param {Any} value Value to be included in a CSV cell
     * @param {Boolean} stringify Details of the field to process to be a CSV cell
     * @returns {String} Value stringified and processed
     */

  }, {
    key: "processValue",
    value: function processValue(value, stringify) {
      if (value === null || value === undefined) {
        return undefined;
      }

      var valueType = _typeof(value);

      if (valueType !== 'boolean' && valueType !== 'number' && valueType !== 'string') {
        value = JSON.stringify(value);

        if (value === undefined) {
          return undefined;
        }

        if (value[0] === '"') {
          value = value.replace(/^"(.+)"$/, '$1');
        }
      }

      if (typeof value === 'string') {
        if (value.includes(this.opts.quote)) {
          value = value.replace(new RegExp(this.opts.quote, 'g'), this.opts.doubleQuote);
        } // This should probably be remove together with the whole strignify option


        if (stringify) {
          value = "".concat(this.opts.quote).concat(value).concat(this.opts.quote);
        } else {
          value = value.replace(new RegExp("^".concat(this.opts.doubleQuote)), this.opts.quote).replace(new RegExp("".concat(this.opts.doubleQuote, "$")), this.opts.quote);
        }

        if (this.opts.excelStrings) {
          value = "\"=\"".concat(value, "\"\"");
        }
      }

      return value;
    }
    /**
     * Performs the flattening of a data row recursively
     *
     * @param {Object} dataRow Original JSON object
     * @param {String} separator Separator to be used as the flattened field name
     * @returns {Object} Flattened object
     */

  }, {
    key: "flatten",
    value: function flatten(dataRow, separator) {
      function step(obj, flatDataRow, currentPath) {
        Object.keys(obj).forEach(function (key) {
          var value = obj[key];
          var newPath = currentPath ? "".concat(currentPath).concat(separator).concat(key) : key;

          if (_typeof(value) !== 'object' || value === null || Array.isArray(value) || Object.prototype.toString.call(value.toJSON) === '[object Function]' || !Object.keys(value).length) {
            flatDataRow[newPath] = value;
            return;
          }

          step(value, flatDataRow, newPath);
        });
        return flatDataRow;
      }

      return step(dataRow, {});
    }
    /**
     * Performs the unwind recursively in specified sequence
     *
     * @param {Object} dataRow Original JSON object
     * @param {String[]} unwindPaths The paths as strings to be used to deconstruct the array
     * @returns {Array} Array of objects containing all rows after unwind of chosen paths
    */

  }, {
    key: "unwindData",
    value: function unwindData(dataRow, unwindPaths) {
      var _this5 = this;

      var unwind = function unwind(rows, unwindPath) {
        return rows.map(function (row) {
          var unwindArray = lodash_get(row, unwindPath);

          if (!Array.isArray(unwindArray)) {
            return row;
          }

          if (!unwindArray.length) {
            return setProp$1(row, unwindPath, undefined);
          }

          return unwindArray.map(function (unwindRow, index) {
            var clonedRow = _this5.opts.unwindBlank && index > 0 ? {} : row;
            return setProp$1(clonedRow, unwindPath, unwindRow);
          });
        }).reduce(flattenReducer$1, []);
      };

      return unwindPaths.reduce(unwind, [dataRow]);
    }
  }]);

  return JSON2CSVBase;
}();

var JSON2CSVBase_1 = JSON2CSVBase;

var fastJoin$2 = utils.fastJoin,
    flattenReducer$2 = utils.flattenReducer;

var JSON2CSVParser =
/*#__PURE__*/
function (_JSON2CSVBase) {
  _inherits(JSON2CSVParser, _JSON2CSVBase);

  function JSON2CSVParser(opts) {
    var _this;

    _classCallCheck(this, JSON2CSVParser);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSON2CSVParser).call(this, opts));

    if (_this.opts.fields) {
      _this.opts.fields = _this.preprocessFieldsInfo(_this.opts.fields);
    }

    return _this;
  }
  /**
   * Main function that converts json to csv.
   *
   * @param {Array|Object} data Array of JSON objects to be converted to CSV
   * @returns {String} The CSV formated data as a string
   */


  _createClass(JSON2CSVParser, [{
    key: "parse",
    value: function parse(data) {
      var processedData = this.preprocessData(data);

      if (!this.opts.fields) {
        this.opts.fields = processedData.reduce(function (fields, item) {
          Object.keys(item).forEach(function (field) {
            if (!fields.includes(field)) {
              fields.push(field);
            }
          });
          return fields;
        }, []);
        this.opts.fields = this.preprocessFieldsInfo(this.opts.fields);
      }

      var header = this.opts.header ? this.getHeader() : '';
      var rows = this.processData(processedData);
      var csv = (this.opts.withBOM ? "\uFEFF" : '') + header + (header && rows ? this.opts.eol : '') + rows;
      return csv;
    }
    /**
     * Preprocess the data according to the give opts (unwind, flatten, etc.)
      and calculate the fields and field names if they are not provided.
     *
     * @param {Array|Object} data Array or object to be converted to CSV
     */

  }, {
    key: "preprocessData",
    value: function preprocessData(data) {
      var _this2 = this;

      var processedData = Array.isArray(data) ? data : [data];

      if (!this.opts.fields && (processedData.length === 0 || _typeof(processedData[0]) !== 'object')) {
        throw new Error('Data should not be empty or the "fields" option should be included');
      }

      if ((!this.opts.unwind || !this.opts.unwind.length) && !this.opts.flatten) {
        return processedData;
      }

      return processedData.map(function (row) {
        return _this2.preprocessRow(row);
      }).reduce(flattenReducer$2, []);
    }
    /**
     * Create the content row by row below the header
     *
     * @param {Array} data Array of JSON objects to be converted to CSV
     * @returns {String} CSV string (body)
     */

  }, {
    key: "processData",
    value: function processData(data) {
      var _this3 = this;

      return fastJoin$2(data.map(function (row) {
        return _this3.processRow(row);
      }).filter(function (row) {
        return row;
      }), // Filter empty rows
      this.opts.eol);
    }
  }]);

  return JSON2CSVParser;
}(JSON2CSVBase_1);

var JSON2CSVParser_1 = JSON2CSVParser;

/*global Buffer*/
// Named constants with unique integer values
var C = {};
// Tokens
var LEFT_BRACE    = C.LEFT_BRACE    = 0x1;
var RIGHT_BRACE   = C.RIGHT_BRACE   = 0x2;
var LEFT_BRACKET  = C.LEFT_BRACKET  = 0x3;
var RIGHT_BRACKET = C.RIGHT_BRACKET = 0x4;
var COLON         = C.COLON         = 0x5;
var COMMA         = C.COMMA         = 0x6;
var TRUE          = C.TRUE          = 0x7;
var FALSE         = C.FALSE         = 0x8;
var NULL          = C.NULL          = 0x9;
var STRING        = C.STRING        = 0xa;
var NUMBER        = C.NUMBER        = 0xb;
// Tokenizer States
var START   = C.START   = 0x11;
var STOP    = C.STOP    = 0x12;
var TRUE1   = C.TRUE1   = 0x21;
var TRUE2   = C.TRUE2   = 0x22;
var TRUE3   = C.TRUE3   = 0x23;
var FALSE1  = C.FALSE1  = 0x31;
var FALSE2  = C.FALSE2  = 0x32;
var FALSE3  = C.FALSE3  = 0x33;
var FALSE4  = C.FALSE4  = 0x34;
var NULL1   = C.NULL1   = 0x41;
var NULL2   = C.NULL2   = 0x42;
var NULL3   = C.NULL3   = 0x43;
var NUMBER1 = C.NUMBER1 = 0x51;
var NUMBER3 = C.NUMBER3 = 0x53;
var STRING1 = C.STRING1 = 0x61;
var STRING2 = C.STRING2 = 0x62;
var STRING3 = C.STRING3 = 0x63;
var STRING4 = C.STRING4 = 0x64;
var STRING5 = C.STRING5 = 0x65;
var STRING6 = C.STRING6 = 0x66;
// Parser States
var VALUE   = C.VALUE   = 0x71;
var KEY     = C.KEY     = 0x72;
// Parser Modes
var OBJECT  = C.OBJECT  = 0x81;
var ARRAY   = C.ARRAY   = 0x82;
// Character constants
var BACK_SLASH =      "\\".charCodeAt(0);
var FORWARD_SLASH =   "\/".charCodeAt(0);
var BACKSPACE =       "\b".charCodeAt(0);
var FORM_FEED =       "\f".charCodeAt(0);
var NEWLINE =         "\n".charCodeAt(0);
var CARRIAGE_RETURN = "\r".charCodeAt(0);
var TAB =             "\t".charCodeAt(0);

var STRING_BUFFER_SIZE = 64 * 1024;

function Parser() {
  this.tState = START;
  this.value = undefined;

  this.string = undefined; // string data
  this.stringBuffer = Buffer.alloc ? Buffer.alloc(STRING_BUFFER_SIZE) : new Buffer(STRING_BUFFER_SIZE);
  this.stringBufferOffset = 0;
  this.unicode = undefined; // unicode escapes
  this.highSurrogate = undefined;

  this.key = undefined;
  this.mode = undefined;
  this.stack = [];
  this.state = VALUE;
  this.bytes_remaining = 0; // number of bytes remaining in multi byte utf8 char to read after split boundary
  this.bytes_in_sequence = 0; // bytes in multi byte utf8 char to read
  this.temp_buffs = { "2": new Buffer(2), "3": new Buffer(3), "4": new Buffer(4) }; // for rebuilding chars split before boundary is reached

  // Stream offset
  this.offset = -1;
}

// Slow code to string converter (only used when throwing syntax errors)
Parser.toknam = function (code) {
  var keys = Object.keys(C);
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    if (C[key] === code) { return key; }
  }
  return code && ("0x" + code.toString(16));
};

var proto = Parser.prototype;
proto.onError = function (err) { throw err; };
proto.charError = function (buffer, i) {
  this.tState = STOP;
  this.onError(new Error("Unexpected " + JSON.stringify(String.fromCharCode(buffer[i])) + " at position " + i + " in state " + Parser.toknam(this.tState)));
};
proto.appendStringChar = function (char) {
  if (this.stringBufferOffset >= STRING_BUFFER_SIZE) {
    this.string += this.stringBuffer.toString('utf8');
    this.stringBufferOffset = 0;
  }

  this.stringBuffer[this.stringBufferOffset++] = char;
};
proto.appendStringBuf = function (buf, start, end) {
  var size = buf.length;
  if (typeof start === 'number') {
    if (typeof end === 'number') {
      if (end < 0) {
        // adding a negative end decreeses the size
        size = buf.length - start + end;
      } else {
        size = end - start;
      }
    } else {
      size = buf.length - start;
    }
  }

  if (size < 0) {
    size = 0;
  }

  if (this.stringBufferOffset + size > STRING_BUFFER_SIZE) {
    this.string += this.stringBuffer.toString('utf8', 0, this.stringBufferOffset);
    this.stringBufferOffset = 0;
  }

  buf.copy(this.stringBuffer, this.stringBufferOffset, start, end);
  this.stringBufferOffset += size;
};
proto.write = function (buffer) {
  if (typeof buffer === "string") buffer = new Buffer(buffer);
  var n;
  for (var i = 0, l = buffer.length; i < l; i++) {
    if (this.tState === START){
      n = buffer[i];
      this.offset++;
      if(n === 0x7b){ this.onToken(LEFT_BRACE, "{"); // {
      }else if(n === 0x7d){ this.onToken(RIGHT_BRACE, "}"); // }
      }else if(n === 0x5b){ this.onToken(LEFT_BRACKET, "["); // [
      }else if(n === 0x5d){ this.onToken(RIGHT_BRACKET, "]"); // ]
      }else if(n === 0x3a){ this.onToken(COLON, ":");  // :
      }else if(n === 0x2c){ this.onToken(COMMA, ","); // ,
      }else if(n === 0x74){ this.tState = TRUE1;  // t
      }else if(n === 0x66){ this.tState = FALSE1;  // f
      }else if(n === 0x6e){ this.tState = NULL1; // n
      }else if(n === 0x22){ // "
        this.string = "";
        this.stringBufferOffset = 0;
        this.tState = STRING1;
      }else if(n === 0x2d){ this.string = "-"; this.tState = NUMBER1; // -
      }else{
        if (n >= 0x30 && n < 0x40) { // 1-9
          this.string = String.fromCharCode(n); this.tState = NUMBER3;
        } else if (n === 0x20 || n === 0x09 || n === 0x0a || n === 0x0d) ; else {
          return this.charError(buffer, i);
        }
      }
    }else if (this.tState === STRING1){ // After open quote
      n = buffer[i]; // get current byte from buffer
      // check for carry over of a multi byte char split between data chunks
      // & fill temp buffer it with start of this data chunk up to the boundary limit set in the last iteration
      if (this.bytes_remaining > 0) {
        for (var j = 0; j < this.bytes_remaining; j++) {
          this.temp_buffs[this.bytes_in_sequence][this.bytes_in_sequence - this.bytes_remaining + j] = buffer[j];
        }

        this.appendStringBuf(this.temp_buffs[this.bytes_in_sequence]);
        this.bytes_in_sequence = this.bytes_remaining = 0;
        i = i + j - 1;
      } else if (this.bytes_remaining === 0 && n >= 128) { // else if no remainder bytes carried over, parse multi byte (>=128) chars one at a time
        if (n <= 193 || n > 244) {
          return this.onError(new Error("Invalid UTF-8 character at position " + i + " in state " + Parser.toknam(this.tState)));
        }
        if ((n >= 194) && (n <= 223)) this.bytes_in_sequence = 2;
        if ((n >= 224) && (n <= 239)) this.bytes_in_sequence = 3;
        if ((n >= 240) && (n <= 244)) this.bytes_in_sequence = 4;
        if ((this.bytes_in_sequence + i) > buffer.length) { // if bytes needed to complete char fall outside buffer length, we have a boundary split
          for (var k = 0; k <= (buffer.length - 1 - i); k++) {
            this.temp_buffs[this.bytes_in_sequence][k] = buffer[i + k]; // fill temp buffer of correct size with bytes available in this chunk
          }
          this.bytes_remaining = (i + this.bytes_in_sequence) - buffer.length;
          i = buffer.length - 1;
        } else {
          this.appendStringBuf(buffer, i, i + this.bytes_in_sequence);
          i = i + this.bytes_in_sequence - 1;
        }
      } else if (n === 0x22) {
        this.tState = START;
        this.string += this.stringBuffer.toString('utf8', 0, this.stringBufferOffset);
        this.stringBufferOffset = 0;
        this.onToken(STRING, this.string);
        this.offset += Buffer.byteLength(this.string, 'utf8') + 1;
        this.string = undefined;
      }
      else if (n === 0x5c) {
        this.tState = STRING2;
      }
      else if (n >= 0x20) { this.appendStringChar(n); }
      else {
          return this.charError(buffer, i);
      }
    }else if (this.tState === STRING2){ // After backslash
      n = buffer[i];
      if(n === 0x22){ this.appendStringChar(n); this.tState = STRING1;
      }else if(n === 0x5c){ this.appendStringChar(BACK_SLASH); this.tState = STRING1;
      }else if(n === 0x2f){ this.appendStringChar(FORWARD_SLASH); this.tState = STRING1;
      }else if(n === 0x62){ this.appendStringChar(BACKSPACE); this.tState = STRING1;
      }else if(n === 0x66){ this.appendStringChar(FORM_FEED); this.tState = STRING1;
      }else if(n === 0x6e){ this.appendStringChar(NEWLINE); this.tState = STRING1;
      }else if(n === 0x72){ this.appendStringChar(CARRIAGE_RETURN); this.tState = STRING1;
      }else if(n === 0x74){ this.appendStringChar(TAB); this.tState = STRING1;
      }else if(n === 0x75){ this.unicode = ""; this.tState = STRING3;
      }else{
        return this.charError(buffer, i);
      }
    }else if (this.tState === STRING3 || this.tState === STRING4 || this.tState === STRING5 || this.tState === STRING6){ // unicode hex codes
      n = buffer[i];
      // 0-9 A-F a-f
      if ((n >= 0x30 && n < 0x40) || (n > 0x40 && n <= 0x46) || (n > 0x60 && n <= 0x66)) {
        this.unicode += String.fromCharCode(n);
        if (this.tState++ === STRING6) {
          var intVal = parseInt(this.unicode, 16);
          this.unicode = undefined;
          if (this.highSurrogate !== undefined && intVal >= 0xDC00 && intVal < (0xDFFF + 1)) { //<56320,57343> - lowSurrogate
            this.appendStringBuf(new Buffer(String.fromCharCode(this.highSurrogate, intVal)));
            this.highSurrogate = undefined;
          } else if (this.highSurrogate === undefined && intVal >= 0xD800 && intVal < (0xDBFF + 1)) { //<55296,56319> - highSurrogate
            this.highSurrogate = intVal;
          } else {
            if (this.highSurrogate !== undefined) {
              this.appendStringBuf(new Buffer(String.fromCharCode(this.highSurrogate)));
              this.highSurrogate = undefined;
            }
            this.appendStringBuf(new Buffer(String.fromCharCode(intVal)));
          }
          this.tState = STRING1;
        }
      } else {
        return this.charError(buffer, i);
      }
    } else if (this.tState === NUMBER1 || this.tState === NUMBER3) {
        n = buffer[i];

        switch (n) {
          case 0x30: // 0
          case 0x31: // 1
          case 0x32: // 2
          case 0x33: // 3
          case 0x34: // 4
          case 0x35: // 5
          case 0x36: // 6
          case 0x37: // 7
          case 0x38: // 8
          case 0x39: // 9
          case 0x2e: // .
          case 0x65: // e
          case 0x45: // E
          case 0x2b: // +
          case 0x2d: // -
            this.string += String.fromCharCode(n);
            this.tState = NUMBER3;
            break;
          default:
            this.tState = START;
            var result = Number(this.string);

            if (isNaN(result)){
              return this.charError(buffer, i);
            }

            if ((this.string.match(/[0-9]+/) == this.string) && (result.toString() != this.string)) {
              // Long string of digits which is an ID string and not valid and/or safe JavaScript integer Number
              this.onToken(STRING, this.string);
            } else {
              this.onToken(NUMBER, result);
            }

            this.offset += this.string.length - 1;
            this.string = undefined;
            i--;
            break;
        }
    }else if (this.tState === TRUE1){ // r
      if (buffer[i] === 0x72) { this.tState = TRUE2; }
      else { return this.charError(buffer, i); }
    }else if (this.tState === TRUE2){ // u
      if (buffer[i] === 0x75) { this.tState = TRUE3; }
      else { return this.charError(buffer, i); }
    }else if (this.tState === TRUE3){ // e
      if (buffer[i] === 0x65) { this.tState = START; this.onToken(TRUE, true); this.offset+= 3; }
      else { return this.charError(buffer, i); }
    }else if (this.tState === FALSE1){ // a
      if (buffer[i] === 0x61) { this.tState = FALSE2; }
      else { return this.charError(buffer, i); }
    }else if (this.tState === FALSE2){ // l
      if (buffer[i] === 0x6c) { this.tState = FALSE3; }
      else { return this.charError(buffer, i); }
    }else if (this.tState === FALSE3){ // s
      if (buffer[i] === 0x73) { this.tState = FALSE4; }
      else { return this.charError(buffer, i); }
    }else if (this.tState === FALSE4){ // e
      if (buffer[i] === 0x65) { this.tState = START; this.onToken(FALSE, false); this.offset+= 4; }
      else { return this.charError(buffer, i); }
    }else if (this.tState === NULL1){ // u
      if (buffer[i] === 0x75) { this.tState = NULL2; }
      else { return this.charError(buffer, i); }
    }else if (this.tState === NULL2){ // l
      if (buffer[i] === 0x6c) { this.tState = NULL3; }
      else { return this.charError(buffer, i); }
    }else if (this.tState === NULL3){ // l
      if (buffer[i] === 0x6c) { this.tState = START; this.onToken(NULL, null); this.offset += 3; }
      else { return this.charError(buffer, i); }
    }
  }
};
proto.onToken = function (token, value) {
  // Override this to get events
};

proto.parseError = function (token, value) {
  this.tState = STOP;
  this.onError(new Error("Unexpected " + Parser.toknam(token) + (value ? ("(" + JSON.stringify(value) + ")") : "") + " in state " + Parser.toknam(this.state)));
};
proto.push = function () {
  this.stack.push({value: this.value, key: this.key, mode: this.mode});
};
proto.pop = function () {
  var value = this.value;
  var parent = this.stack.pop();
  this.value = parent.value;
  this.key = parent.key;
  this.mode = parent.mode;
  this.emit(value);
  if (!this.mode) { this.state = VALUE; }
};
proto.emit = function (value) {
  if (this.mode) { this.state = COMMA; }
  this.onValue(value);
};
proto.onValue = function (value) {
  // Override me
};
proto.onToken = function (token, value) {
  if(this.state === VALUE){
    if(token === STRING || token === NUMBER || token === TRUE || token === FALSE || token === NULL){
      if (this.value) {
        this.value[this.key] = value;
      }
      this.emit(value);
    }else if(token === LEFT_BRACE){
      this.push();
      if (this.value) {
        this.value = this.value[this.key] = {};
      } else {
        this.value = {};
      }
      this.key = undefined;
      this.state = KEY;
      this.mode = OBJECT;
    }else if(token === LEFT_BRACKET){
      this.push();
      if (this.value) {
        this.value = this.value[this.key] = [];
      } else {
        this.value = [];
      }
      this.key = 0;
      this.mode = ARRAY;
      this.state = VALUE;
    }else if(token === RIGHT_BRACE){
      if (this.mode === OBJECT) {
        this.pop();
      } else {
        return this.parseError(token, value);
      }
    }else if(token === RIGHT_BRACKET){
      if (this.mode === ARRAY) {
        this.pop();
      } else {
        return this.parseError(token, value);
      }
    }else{
      return this.parseError(token, value);
    }
  }else if(this.state === KEY){
    if (token === STRING) {
      this.key = value;
      this.state = COLON;
    } else if (token === RIGHT_BRACE) {
      this.pop();
    } else {
      return this.parseError(token, value);
    }
  }else if(this.state === COLON){
    if (token === COLON) { this.state = VALUE; }
    else { return this.parseError(token, value); }
  }else if(this.state === COMMA){
    if (token === COMMA) {
      if (this.mode === ARRAY) { this.key++; this.state = VALUE; }
      else if (this.mode === OBJECT) { this.state = KEY; }

    } else if (token === RIGHT_BRACKET && this.mode === ARRAY || token === RIGHT_BRACE && this.mode === OBJECT) {
      this.pop();
    } else {
      return this.parseError(token, value);
    }
  }else{
    return this.parseError(token, value);
  }
};

Parser.C = C;

var jsonparse = Parser;

var Transform = stream.Transform;

var JSON2CSVTransform =
/*#__PURE__*/
function (_Transform) {
  _inherits(JSON2CSVTransform, _Transform);

  function JSON2CSVTransform(opts, transformOpts) {
    var _this;

    _classCallCheck(this, JSON2CSVTransform);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSON2CSVTransform).call(this, transformOpts)); // Inherit methods from JSON2CSVBase since extends doesn't
    // allow multiple inheritance and manually preprocess opts

    Object.getOwnPropertyNames(JSON2CSVBase_1.prototype).forEach(function (key) {
      return _this[key] = JSON2CSVBase_1.prototype[key];
    });
    _this.opts = _this.preprocessOpts(opts);
    _this.preprocessRow = _this.memoizePreprocessRow();
    _this._data = '';
    _this._hasWritten = false;

    if (_this._readableState.objectMode) {
      _this.initObjectModeParse();
    } else if (_this.opts.ndjson) {
      _this.initNDJSONParse();
    } else {
      _this.initJSONParser();
    }

    if (_this.opts.withBOM) {
      _this.push("\uFEFF");
    }

    if (_this.opts.fields) {
      _this.opts.fields = _this.preprocessFieldsInfo(_this.opts.fields);

      _this.pushHeader();
    }

    return _this;
  }
  /**
   * Init the transform with a parser to process data in object mode.
   * It receives JSON objects one by one and send them to `pushLine for processing.
   */


  _createClass(JSON2CSVTransform, [{
    key: "initObjectModeParse",
    value: function initObjectModeParse() {
      var transform = this;
      this.parser = {
        write: function write(line) {
          transform.pushLine(line);
        },
        getPendingData: function getPendingData() {
          return undefined;
        }
      };
    }
    /**
     * Init the transform with a parser to process NDJSON data.
     * It maintains a buffer of received data, parses each line
     * as JSON and send it to `pushLine for processing.
     */

  }, {
    key: "initNDJSONParse",
    value: function initNDJSONParse() {
      var transform = this;
      this.parser = {
        _data: '',
        write: function write(chunk) {
          this._data += chunk.toString();

          var lines = this._data.split('\n').map(function (line) {
            return line.trim();
          }).filter(function (line) {
            return line !== '';
          });

          var pendingData = false;
          lines.forEach(function (line, i) {
            try {
              transform.pushLine(JSON.parse(line));
            } catch (e) {
              if (i === lines.length - 1) {
                pendingData = true;
              } else {
                e.message = 'Invalid JSON (' + line + ')';
                transform.emit('error', e);
              }
            }
          });
          this._data = pendingData ? this._data.slice(this._data.lastIndexOf('\n')) : '';
        },
        getPendingData: function getPendingData() {
          return this._data;
        }
      };
    }
    /**
     * Init the transform with a parser to process JSON data.
     * It maintains a buffer of received data, parses each as JSON 
     * item if the data is an array or the data itself otherwise
     * and send it to `pushLine` for processing.
     */

  }, {
    key: "initJSONParser",
    value: function initJSONParser() {
      var transform = this;
      this.parser = new jsonparse();

      this.parser.onValue = function (value) {
        if (this.stack.length !== this.depthToEmit) return;
        transform.pushLine(value);
      };

      this.parser._onToken = this.parser.onToken;

      this.parser.onToken = function (token, value) {
        transform.parser._onToken(token, value);

        if (this.stack.length === 0 && !transform.opts.fields && this.mode !== jsonparse.C.ARRAY && this.mode !== jsonparse.C.OBJECT) {
          this.onError(new Error('Data should not be empty or the "fields" option should be included'));
        }

        if (this.stack.length === 1) {
          if (this.depthToEmit === undefined) {
            // If Array emit its content, else emit itself
            this.depthToEmit = this.mode === jsonparse.C.ARRAY ? 1 : 0;
          }

          if (this.depthToEmit !== 0 && this.stack.length === 1) {
            // No need to store the whole root array in memory
            this.value = undefined;
          }
        }
      };

      this.parser.getPendingData = function () {
        return this.value;
      };

      this.parser.onError = function (err) {
        if (err.message.includes('Unexpected')) {
          err.message = 'Invalid JSON (' + err.message + ')';
        }

        transform.emit('error', err);
      };
    }
    /**
     * Main function that send data to the parse to be processed.
     *
     * @param {Buffer} chunk Incoming data
     * @param {String} encoding Encoding of the incoming data. Defaults to 'utf8'
     * @param {Function} done Called when the proceesing of the supplied chunk is done
     */

  }, {
    key: "_transform",
    value: function _transform(chunk, encoding, done) {
      this.parser.write(chunk);
      done();
    }
  }, {
    key: "_flush",
    value: function _flush(done) {
      if (this.parser.getPendingData()) {
        done(new Error('Invalid data received from stdin', this.parser.getPendingData()));
      }

      done();
    }
    /**
     * Generate the csv header and pushes it downstream.
     */

  }, {
    key: "pushHeader",
    value: function pushHeader() {
      if (this.opts.header) {
        var header = this.getHeader();
        this.emit('header', header);
        this.push(header);
        this._hasWritten = true;
      }
    }
    /**
     * Transforms an incoming json data to csv and pushes it downstream.
     *
     * @param {Object} data JSON object to be converted in a CSV row
     */

  }, {
    key: "pushLine",
    value: function pushLine(data) {
      var _this2 = this;

      var processedData = this.preprocessRow(data);

      if (!this._hasWritten) {
        this.opts.fields = this.opts.fields || this.preprocessFieldsInfo(Object.keys(processedData[0]));
        this.pushHeader();
      }

      processedData.forEach(function (row) {
        var line = _this2.processRow(row, _this2.opts);

        if (line === undefined) return;

        _this2.emit('line', line);

        _this2.push(_this2._hasWritten ? _this2.opts.eol + line : line);

        _this2._hasWritten = true;
      });
    }
  }]);

  return JSON2CSVTransform;
}(Transform);

var JSON2CSVTransform_1 = JSON2CSVTransform;

var Transform$1 = stream.Transform;
var fastJoin$3 = utils.fastJoin;

var JSON2CSVAsyncParser =
/*#__PURE__*/
function () {
  function JSON2CSVAsyncParser(opts, transformOpts) {
    _classCallCheck(this, JSON2CSVAsyncParser);

    this.input = new Transform$1(transformOpts);

    this.input._read = function () {};

    this.transform = new JSON2CSVTransform_1(opts, transformOpts);
    this.processor = this.input.pipe(this.transform);
  }

  _createClass(JSON2CSVAsyncParser, [{
    key: "fromInput",
    value: function fromInput(input) {
      if (this._input) {
        throw new Error('Async parser already has an input.');
      }

      this._input = input;
      this.input = this._input.pipe(this.processor);
      return this;
    }
  }, {
    key: "throughTransform",
    value: function throughTransform(transform) {
      if (this._output) {
        throw new Error('Can\'t add transforms once an output has been added.');
      }

      this.processor = this.processor.pipe(transform);
      return this;
    }
  }, {
    key: "toOutput",
    value: function toOutput(output) {
      if (this._output) {
        throw new Error('Async parser already has an output.');
      }

      this._output = output;
      this.processor = this.processor.pipe(output);
      return this;
    }
  }, {
    key: "promise",
    value: function promise() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        var csvBuffer = [];

        _this.processor.on('data', function (chunk) {
          return csvBuffer.push(chunk.toString());
        }).on('finish', function () {
          return resolve(fastJoin$3(csvBuffer, ''));
        }).on('error', function (err) {
          return reject(err);
        });
      });
    }
  }]);

  return JSON2CSVAsyncParser;
}();

var JSON2CSVAsyncParser_1 = JSON2CSVAsyncParser;

var Readable = stream.Readable;
var Parser$1 = JSON2CSVParser_1;
var AsyncParser = JSON2CSVAsyncParser_1;
var Transform$2 = JSON2CSVTransform_1; // Convenience method to keep the API similar to version 3.X

var parse = function parse(data, opts) {
  return new JSON2CSVParser_1(opts).parse(data);
};

var parseAsync = function parseAsync(data, opts, transformOpts) {
  if (!(data instanceof Readable)) {
    transformOpts = Object.assign({}, transformOpts, {
      objectMode: true
    });
  }

  var asyncParser = new JSON2CSVAsyncParser_1(opts, transformOpts);
  var promise = asyncParser.promise();

  if (Array.isArray(data)) {
    data.forEach(function (item) {
      return asyncParser.input.push(item);
    });
    asyncParser.input.push(null);
  } else if (data instanceof Readable) {
    asyncParser.fromInput(data);
  } else {
    asyncParser.input.push(data);
    asyncParser.input.push(null);
  }

  return promise;
};

var json2csv = {
  Parser: Parser$1,
  AsyncParser: AsyncParser,
  Transform: Transform$2,
  parse: parse,
  parseAsync: parseAsync
};

exports.default = json2csv;
exports.Parser = Parser$1;
exports.AsyncParser = AsyncParser;
exports.Transform = Transform$2;
exports.parse = parse;
exports.parseAsync = parseAsync;
