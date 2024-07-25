var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Property_instances, _Property_init, _Property_get, _Property_set;
import BaseJSNode from './BaseJSNode.js';
export default class Property extends BaseJSNode {
    constructor() {
        super(...arguments);
        _Property_instances.add(this);
    }
    run() {
        switch (this.node.kind) {
            case 'init':
                return __classPrivateFieldGet(this, _Property_instances, "m", _Property_init).call(this);
            case 'get':
                return __classPrivateFieldGet(this, _Property_instances, "m", _Property_get).call(this);
            case 'set':
                return __classPrivateFieldGet(this, _Property_instances, "m", _Property_set).call(this);
            default:
                throw new Error(`Unhandled property kind: ${this.node.kind}`);
        }
    }
}
_Property_instances = new WeakSet(), _Property_init = function _Property_init() {
    const key = this.node.computed ? this.visitor.visitNode(this.node.key) : this.visitor.getName(this.node.key);
    const value = this.visitor.visitNode(this.node.value);
    if (key) {
        return { [key]: value };
    }
}, _Property_get = function _Property_get() {
    throw new TypeError('Not implemented: Property.get');
}, _Property_set = function _Property_set() {
    throw new TypeError('Not implemented: Property.set');
};
