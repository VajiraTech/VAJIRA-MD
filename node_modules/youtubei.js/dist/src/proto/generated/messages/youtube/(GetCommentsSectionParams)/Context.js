import { tsValueToJsonValueFns, jsonValueToTsValueFns, } from "../../../runtime/json/scalar.js";
import { default as serialize, } from "../../../runtime/wire/serialize.js";
import { tsValueToWireValueFns, wireValueToTsValueFns, } from "../../../runtime/wire/scalar.js";
import { default as deserialize, } from "../../../runtime/wire/deserialize.js";
export function getDefaultValue() {
    return {
        videoId: "",
    };
}
export function createValue(partialValue) {
    return Object.assign(Object.assign({}, getDefaultValue()), partialValue);
}
export function encodeJson(value) {
    const result = {};
    if (value.videoId !== undefined)
        result.videoId = tsValueToJsonValueFns.string(value.videoId);
    return result;
}
export function decodeJson(value) {
    const result = getDefaultValue();
    if (value.videoId !== undefined)
        result.videoId = jsonValueToTsValueFns.string(value.videoId);
    return result;
}
export function encodeBinary(value) {
    const result = [];
    if (value.videoId !== undefined) {
        const tsValue = value.videoId;
        result.push([2, tsValueToWireValueFns.string(tsValue)]);
    }
    return serialize(result);
}
export function decodeBinary(binary) {
    const result = getDefaultValue();
    const wireMessage = deserialize(binary);
    const wireFields = new Map(wireMessage);
    field: {
        const wireValue = wireFields.get(2);
        if (wireValue === undefined)
            break field;
        const value = wireValueToTsValueFns.string(wireValue);
        if (value === undefined)
            break field;
        result.videoId = value;
    }
    return result;
}
//# sourceMappingURL=Context.js.map