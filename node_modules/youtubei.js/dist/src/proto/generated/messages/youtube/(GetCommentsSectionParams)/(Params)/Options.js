import { tsValueToJsonValueFns, jsonValueToTsValueFns, } from "../../../../runtime/json/scalar.js";
import { default as serialize, } from "../../../../runtime/wire/serialize.js";
import { tsValueToWireValueFns, wireValueToTsValueFns, } from "../../../../runtime/wire/scalar.js";
import { default as deserialize, } from "../../../../runtime/wire/deserialize.js";
export function getDefaultValue() {
    return {
        videoId: "",
        sortBy: 0,
        type: 0,
    };
}
export function createValue(partialValue) {
    return Object.assign(Object.assign({}, getDefaultValue()), partialValue);
}
export function encodeJson(value) {
    const result = {};
    if (value.videoId !== undefined)
        result.videoId = tsValueToJsonValueFns.string(value.videoId);
    if (value.sortBy !== undefined)
        result.sortBy = tsValueToJsonValueFns.int32(value.sortBy);
    if (value.type !== undefined)
        result.type = tsValueToJsonValueFns.int32(value.type);
    return result;
}
export function decodeJson(value) {
    const result = getDefaultValue();
    if (value.videoId !== undefined)
        result.videoId = jsonValueToTsValueFns.string(value.videoId);
    if (value.sortBy !== undefined)
        result.sortBy = jsonValueToTsValueFns.int32(value.sortBy);
    if (value.type !== undefined)
        result.type = jsonValueToTsValueFns.int32(value.type);
    return result;
}
export function encodeBinary(value) {
    const result = [];
    if (value.videoId !== undefined) {
        const tsValue = value.videoId;
        result.push([4, tsValueToWireValueFns.string(tsValue)]);
    }
    if (value.sortBy !== undefined) {
        const tsValue = value.sortBy;
        result.push([6, tsValueToWireValueFns.int32(tsValue)]);
    }
    if (value.type !== undefined) {
        const tsValue = value.type;
        result.push([15, tsValueToWireValueFns.int32(tsValue)]);
    }
    return serialize(result);
}
export function decodeBinary(binary) {
    const result = getDefaultValue();
    const wireMessage = deserialize(binary);
    const wireFields = new Map(wireMessage);
    field: {
        const wireValue = wireFields.get(4);
        if (wireValue === undefined)
            break field;
        const value = wireValueToTsValueFns.string(wireValue);
        if (value === undefined)
            break field;
        result.videoId = value;
    }
    field: {
        const wireValue = wireFields.get(6);
        if (wireValue === undefined)
            break field;
        const value = wireValueToTsValueFns.int32(wireValue);
        if (value === undefined)
            break field;
        result.sortBy = value;
    }
    field: {
        const wireValue = wireFields.get(15);
        if (wireValue === undefined)
            break field;
        const value = wireValueToTsValueFns.int32(wireValue);
        if (value === undefined)
            break field;
        result.type = value;
    }
    return result;
}
//# sourceMappingURL=Options.js.map