var _YTNode_instances, _YTNode_is, _Maybe_instances, _Maybe_value, _Maybe_checkPrimative, _Maybe_assertPrimative, _SuperParsedResult_result;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { deepCompare, ParsingError } from '../utils/Utils.js';
const isObserved = Symbol('ObservedArray.isObserved');
export class YTNode {
    constructor() {
        _YTNode_instances.add(this);
        this.type = this.constructor.type;
    }
    /**
     * Check if the node is of the given type.
     * @param types - The type to check
     * @returns whether the node is of the given type
     */
    is(...types) {
        return types.some((type) => __classPrivateFieldGet(this, _YTNode_instances, "m", _YTNode_is).call(this, type));
    }
    /**
     * Cast to one of the given types.
     */
    as(...types) {
        if (!this.is(...types)) {
            throw new ParsingError(`Cannot cast ${this.type} to one of ${types.map((t) => t.type).join(', ')}`);
        }
        return this;
    }
    /**
     * Check for a key without asserting the type.
     * @param key - The key to check
     * @returns Whether the node has the key
     */
    hasKey(key) {
        return Reflect.has(this, key);
    }
    /**
     * Assert that the node has the given key and return it.
     * @param key - The key to check
     * @returns The value of the key wrapped in a Maybe
     * @throws If the node does not have the key
     */
    key(key) {
        if (!this.hasKey(key)) {
            throw new ParsingError(`Missing key ${key}`);
        }
        return new Maybe(this[key]);
    }
}
_YTNode_instances = new WeakSet(), _YTNode_is = function _YTNode_is(type) {
    return this.type === type.type;
};
YTNode.type = 'YTNode';
export class Maybe {
    constructor(value) {
        _Maybe_instances.add(this);
        _Maybe_value.set(this, void 0);
        __classPrivateFieldSet(this, _Maybe_value, value, "f");
    }
    get typeof() {
        return typeof __classPrivateFieldGet(this, _Maybe_value, "f");
    }
    string() {
        return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_assertPrimative).call(this, 'string');
    }
    isString() {
        return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, 'string');
    }
    number() {
        return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_assertPrimative).call(this, 'number');
    }
    isNumber() {
        return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, 'number');
    }
    bigint() {
        return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_assertPrimative).call(this, 'bigint');
    }
    isBigint() {
        return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, 'bigint');
    }
    boolean() {
        return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_assertPrimative).call(this, 'boolean');
    }
    isBoolean() {
        return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, 'boolean');
    }
    symbol() {
        return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_assertPrimative).call(this, 'symbol');
    }
    isSymbol() {
        return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, 'symbol');
    }
    undefined() {
        return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_assertPrimative).call(this, 'undefined');
    }
    isUndefined() {
        return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, 'undefined');
    }
    null() {
        if (__classPrivateFieldGet(this, _Maybe_value, "f") !== null)
            throw new TypeError(`Expected null, got ${typeof __classPrivateFieldGet(this, _Maybe_value, "f")}`);
        return __classPrivateFieldGet(this, _Maybe_value, "f");
    }
    isNull() {
        return __classPrivateFieldGet(this, _Maybe_value, "f") === null;
    }
    object() {
        return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_assertPrimative).call(this, 'object');
    }
    isObject() {
        return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, 'object');
    }
    /* eslint-ignore */
    function() {
        return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_assertPrimative).call(this, 'function');
    }
    isFunction() {
        return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, 'function');
    }
    /**
     * Get the value as an array.
     * @returns the value as any[]
     * @throws If the value is not an array
     */
    array() {
        if (!Array.isArray(__classPrivateFieldGet(this, _Maybe_value, "f"))) {
            throw new TypeError(`Expected array, got ${typeof __classPrivateFieldGet(this, _Maybe_value, "f")}`);
        }
        return __classPrivateFieldGet(this, _Maybe_value, "f");
    }
    /**
     * More typesafe variant of {@link Maybe#array}.
     * @returns a proxied array which returns all the values as {@link Maybe}
     * @throws If the value is not an array
     */
    arrayOfMaybe() {
        const arrayProps = [];
        return new Proxy(this.array(), {
            get(target, prop) {
                if (Reflect.has(arrayProps, prop)) {
                    return Reflect.get(target, prop);
                }
                return new Maybe(Reflect.get(target, prop));
            }
        });
    }
    /**
     * Check whether the value is an array.
     * @returns whether the value is an array
     */
    isArray() {
        return Array.isArray(__classPrivateFieldGet(this, _Maybe_value, "f"));
    }
    /**
     * Get the value as a YTNode
     * @returns the value as a YTNode
     * @throws If the value is not a YTNode
     */
    node() {
        if (!(__classPrivateFieldGet(this, _Maybe_value, "f") instanceof YTNode)) {
            throw new TypeError(`Expected YTNode, got ${__classPrivateFieldGet(this, _Maybe_value, "f").constructor.name}`);
        }
        return __classPrivateFieldGet(this, _Maybe_value, "f");
    }
    /**
     * Check if the value is a YTNode
     * @returns Whether the value is a YTNode
     */
    isNode() {
        return __classPrivateFieldGet(this, _Maybe_value, "f") instanceof YTNode;
    }
    /**
     * Get the value as a YTNode of the given type.
     * @param type - The type to cast to
     * @returns The node casted to the given type
     * @throws If the node is not of the given type
     */
    nodeOfType(...types) {
        return this.node().as(...types);
    }
    /**
     * Check if the value is a YTNode of the given type.
     * @param type - the type to check
     * @returns Whether the value is a YTNode of the given type
     */
    isNodeOfType(...types) {
        return this.isNode() && this.node().is(...types);
    }
    /**
     * Get the value as an ObservedArray.
     * @returns the value of the Maybe as a ObservedArray
     */
    observed() {
        if (!this.isObserved()) {
            throw new TypeError(`Expected ObservedArray, got ${typeof __classPrivateFieldGet(this, _Maybe_value, "f")}`);
        }
        return __classPrivateFieldGet(this, _Maybe_value, "f");
    }
    /**
     * Check if the value is an ObservedArray.
     */
    isObserved() {
        var _a;
        return (_a = __classPrivateFieldGet(this, _Maybe_value, "f")) === null || _a === void 0 ? void 0 : _a[isObserved];
    }
    /**
     * Get the value of the Maybe as a SuperParsedResult.
     * @returns the value as a SuperParsedResult
     * @throws If the value is not a SuperParsedResult
     */
    parsed() {
        if (!(__classPrivateFieldGet(this, _Maybe_value, "f") instanceof SuperParsedResult)) {
            throw new TypeError(`Expected SuperParsedResult, got ${typeof __classPrivateFieldGet(this, _Maybe_value, "f")}`);
        }
        return __classPrivateFieldGet(this, _Maybe_value, "f");
    }
    /**
     * Is the result a SuperParsedResult?
     */
    isParsed() {
        return __classPrivateFieldGet(this, _Maybe_value, "f") instanceof SuperParsedResult;
    }
    /**
     * @deprecated This call is not meant to be used outside of debugging. Please use the specific type getter instead.
     */
    any() {
        console.warn('This call is not meant to be used outside of debugging. Please use the specific type getter instead.');
        return __classPrivateFieldGet(this, _Maybe_value, "f");
    }
    /**
     * Get the node as an instance of the given class.
     * @param type - The type to check
     * @returns the value as the given type
     * @throws If the node is not of the given type
     */
    instanceof(type) {
        if (!this.isInstanceof(type)) {
            throw new TypeError(`Expected instance of ${type.name}, got ${__classPrivateFieldGet(this, _Maybe_value, "f").constructor.name}`);
        }
        return __classPrivateFieldGet(this, _Maybe_value, "f");
    }
    /**
     * Check if the node is an instance of the given class.
     * @param type - The type to check
     * @returns Whether the node is an instance of the given type
     */
    isInstanceof(type) {
        return __classPrivateFieldGet(this, _Maybe_value, "f") instanceof type;
    }
}
_Maybe_value = new WeakMap(), _Maybe_instances = new WeakSet(), _Maybe_checkPrimative = function _Maybe_checkPrimative(type) {
    if (typeof __classPrivateFieldGet(this, _Maybe_value, "f") !== type) {
        return false;
    }
    return true;
}, _Maybe_assertPrimative = function _Maybe_assertPrimative(type) {
    if (!__classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, type)) {
        throw new TypeError(`Expected ${type}, got ${this.typeof}`);
    }
    return __classPrivateFieldGet(this, _Maybe_value, "f");
};
/**
 * Represents a parsed response in an unknown state. Either a YTNode or a YTNode[] or null.
 */
export class SuperParsedResult {
    constructor(result) {
        _SuperParsedResult_result.set(this, void 0);
        __classPrivateFieldSet(this, _SuperParsedResult_result, result, "f");
    }
    get is_null() {
        return __classPrivateFieldGet(this, _SuperParsedResult_result, "f") === null;
    }
    get is_array() {
        return !this.is_null && Array.isArray(__classPrivateFieldGet(this, _SuperParsedResult_result, "f"));
    }
    get is_node() {
        return !this.is_array;
    }
    array() {
        if (!this.is_array) {
            throw new TypeError('Expected an array, got a node');
        }
        return __classPrivateFieldGet(this, _SuperParsedResult_result, "f");
    }
    item() {
        if (!this.is_node) {
            throw new TypeError('Expected a node, got an array');
        }
        return __classPrivateFieldGet(this, _SuperParsedResult_result, "f");
    }
}
_SuperParsedResult_result = new WeakMap();
/**
 * Creates a trap to intercept property access
 * and add utilities to an object.
 */
export function observe(obj) {
    return new Proxy(obj, {
        get(target, prop) {
            if (prop == 'get') {
                return (rule, del_item) => (target.find((obj, index) => {
                    const match = deepCompare(rule, obj);
                    if (match && del_item) {
                        target.splice(index, 1);
                    }
                    return match;
                }));
            }
            if (prop == isObserved) {
                return true;
            }
            if (prop == 'getAll') {
                return (rule, del_items) => (target.filter((obj, index) => {
                    const match = deepCompare(rule, obj);
                    if (match && del_items) {
                        target.splice(index, 1);
                    }
                    return match;
                }));
            }
            if (prop == 'matchCondition') {
                return (condition) => (target.find((obj) => {
                    return condition(obj);
                }));
            }
            if (prop == 'filterType') {
                return (...types) => {
                    return observe(target.filter((node) => {
                        if (node.is(...types))
                            return true;
                        return false;
                    }));
                };
            }
            if (prop == 'firstOfType') {
                return (...types) => {
                    return target.find((node) => {
                        if (node.is(...types))
                            return true;
                        return false;
                    });
                };
            }
            if (prop == 'first') {
                return () => target[0];
            }
            if (prop == 'as') {
                return (...types) => {
                    return observe(target.map((node) => {
                        if (node.is(...types))
                            return node;
                        throw new ParsingError(`Expected node of any type ${types.map((type) => type.type).join(', ')}, got ${node.type}`);
                    }));
                };
            }
            if (prop == 'remove') {
                return (index) => target.splice(index, 1);
            }
            return Reflect.get(target, prop);
        }
    });
}
export class Memo extends Map {
    getType(...types) {
        types = types.flat();
        return observe(types.flatMap((type) => (this.get(type.type) || [])));
    }
}
//# sourceMappingURL=helpers.js.map