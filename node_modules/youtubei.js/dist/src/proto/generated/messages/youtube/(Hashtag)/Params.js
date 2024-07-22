import { tsValueToJsonValueFns, jsonValueToTsValueFns, } from "../../../runtime/json/scalar.js";
import { default as serialize, } from "../../../runtime/wire/serialize.js";
import { tsValueToWireValueFns, wireValueToTsValueFns, } from "../../../runtime/wire/scalar.js";
import { default as deserialize, } from "../../../runtime/wire/deserialize.js";
export function getDefaultValue() {
    return {
        hashtag: "",
        type: 0,
    };
}
export function createValue(partialValue) {
    return Object.assign(Object.assign({}, getDefaultValue()), partialValue);
}
export function encodeJson(value) {
    const result = {};
    if (value.hashtag !== undefined)
        result.hashtag = tsValueToJsonValueFns.string(value.hashtag);
    if (value.type !== undefined)
        result.type = tsValueToJsonValueFns.int32(value.type);
    return result;
}
export function decodeJson(value) {
    const result = getDefaultValue();
    if (value.hashtag !== undefined)
        result.hashtag = jsonValueToTsValueFns.string(value.hashtag);
    if (value.type !== undefined)
        result.type = jsonValueToTsValueFns.int32(value.type);
    return result;
}
export function encodeBinary(value) {
    const result = [];
    if (value.hashtag !== undefined) {
        const tsValue = value.hashtag;
        result.push([1, tsValueToWireValueFns.string(tsValue)]);
    }
    if (value.type !== undefined) {
        const tsValue = value.type;
        result.push([3, tsValueToWireValueFns.int32(tsValue)]);
    }
    return serialize(result);
}
export function decodeBinary(binary) {
    const result = getDefaultValue();
    const wireMessage = deserialize(binary);
    const wireFields = new Map(wireMessage);
    field: {
        const wireValue = wireFields.get(1);
        if (wireValue === undefined)
            break field;
        const value = wireValueToTsValueFns.string(wireValue);
        if (value === undefined)
            break field;
        result.hashtag = value;
    }
    field: {
        const wireValue = wireFields.get(3);
        if (wireValue === undefined)
            break field;
        const value = wireValueToTsValueFns.int32(wireValue);
        if (value === undefined)
            break field;
        result.type = value;
    }
    return result;
}
//# sourceMappingURL=Params.js.map