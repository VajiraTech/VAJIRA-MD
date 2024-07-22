import { tsValueToJsonValueFns, jsonValueToTsValueFns, } from "../../../../../runtime/json/scalar.js";
import { default as serialize, } from "../../../../../runtime/wire/serialize.js";
import { tsValueToWireValueFns, wireValueToTsValueFns, } from "../../../../../runtime/wire/scalar.js";
import { default as deserialize, } from "../../../../../runtime/wire/deserialize.js";
export function getDefaultValue() {
    return {
        id1: "",
        id2: "",
        id3: "",
    };
}
export function createValue(partialValue) {
    return Object.assign(Object.assign({}, getDefaultValue()), partialValue);
}
export function encodeJson(value) {
    const result = {};
    if (value.id1 !== undefined)
        result.id1 = tsValueToJsonValueFns.string(value.id1);
    if (value.id2 !== undefined)
        result.id2 = tsValueToJsonValueFns.string(value.id2);
    if (value.id3 !== undefined)
        result.id3 = tsValueToJsonValueFns.string(value.id3);
    return result;
}
export function decodeJson(value) {
    const result = getDefaultValue();
    if (value.id1 !== undefined)
        result.id1 = jsonValueToTsValueFns.string(value.id1);
    if (value.id2 !== undefined)
        result.id2 = jsonValueToTsValueFns.string(value.id2);
    if (value.id3 !== undefined)
        result.id3 = jsonValueToTsValueFns.string(value.id3);
    return result;
}
export function encodeBinary(value) {
    const result = [];
    if (value.id1 !== undefined) {
        const tsValue = value.id1;
        result.push([1, tsValueToWireValueFns.string(tsValue)]);
    }
    if (value.id2 !== undefined) {
        const tsValue = value.id2;
        result.push([2, tsValueToWireValueFns.string(tsValue)]);
    }
    if (value.id3 !== undefined) {
        const tsValue = value.id3;
        result.push([3, tsValueToWireValueFns.string(tsValue)]);
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
        result.id1 = value;
    }
    field: {
        const wireValue = wireFields.get(2);
        if (wireValue === undefined)
            break field;
        const value = wireValueToTsValueFns.string(wireValue);
        if (value === undefined)
            break field;
        result.id2 = value;
    }
    field: {
        const wireValue = wireFields.get(3);
        if (wireValue === undefined)
            break field;
        const value = wireValueToTsValueFns.string(wireValue);
        if (value === undefined)
            break field;
        result.id3 = value;
    }
    return result;
}
//# sourceMappingURL=Ids.js.map