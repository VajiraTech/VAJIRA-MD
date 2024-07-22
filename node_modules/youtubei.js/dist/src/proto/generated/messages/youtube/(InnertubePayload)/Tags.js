import { tsValueToJsonValueFns, jsonValueToTsValueFns, } from "../../../runtime/json/scalar.js";
import { default as serialize, } from "../../../runtime/wire/serialize.js";
import { tsValueToWireValueFns, wireValueToTsValueFns, } from "../../../runtime/wire/scalar.js";
import { default as deserialize, } from "../../../runtime/wire/deserialize.js";
export function getDefaultValue() {
    return {
        list: [],
    };
}
export function createValue(partialValue) {
    return Object.assign(Object.assign({}, getDefaultValue()), partialValue);
}
export function encodeJson(value) {
    const result = {};
    result.list = value.list.map(value => tsValueToJsonValueFns.string(value));
    return result;
}
export function decodeJson(value) {
    var _a, _b;
    const result = getDefaultValue();
    result.list = (_b = (_a = value.list) === null || _a === void 0 ? void 0 : _a.map((value) => jsonValueToTsValueFns.string(value))) !== null && _b !== void 0 ? _b : [];
    return result;
}
export function encodeBinary(value) {
    const result = [];
    for (const tsValue of value.list) {
        result.push([1, tsValueToWireValueFns.string(tsValue)]);
    }
    return serialize(result);
}
export function decodeBinary(binary) {
    const result = getDefaultValue();
    const wireMessage = deserialize(binary);
    const wireFields = new Map(wireMessage);
    collection: {
        const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
        const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
        if (!value.length)
            break collection;
        result.list = value;
    }
    return result;
}
//# sourceMappingURL=Tags.js.map