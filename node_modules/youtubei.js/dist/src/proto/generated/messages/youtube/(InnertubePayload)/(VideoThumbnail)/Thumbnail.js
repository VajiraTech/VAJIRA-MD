import { tsValueToJsonValueFns, jsonValueToTsValueFns, } from "../../../../runtime/json/scalar.js";
import { default as serialize, } from "../../../../runtime/wire/serialize.js";
import { tsValueToWireValueFns, wireValueToTsValueFns, } from "../../../../runtime/wire/scalar.js";
import { default as deserialize, } from "../../../../runtime/wire/deserialize.js";
export function getDefaultValue() {
    return {
        imageData: new Uint8Array(),
    };
}
export function createValue(partialValue) {
    return Object.assign(Object.assign({}, getDefaultValue()), partialValue);
}
export function encodeJson(value) {
    const result = {};
    if (value.imageData !== undefined)
        result.imageData = tsValueToJsonValueFns.bytes(value.imageData);
    return result;
}
export function decodeJson(value) {
    const result = getDefaultValue();
    if (value.imageData !== undefined)
        result.imageData = jsonValueToTsValueFns.bytes(value.imageData);
    return result;
}
export function encodeBinary(value) {
    const result = [];
    if (value.imageData !== undefined) {
        const tsValue = value.imageData;
        result.push([1, tsValueToWireValueFns.bytes(tsValue)]);
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
        const value = wireValueToTsValueFns.bytes(wireValue);
        if (value === undefined)
            break field;
        result.imageData = value;
    }
    return result;
}
//# sourceMappingURL=Thumbnail.js.map