import { encodeJson as encodeJson_1, decodeJson as decodeJson_1, encodeBinary as encodeBinary_1, decodeBinary as decodeBinary_1, } from "./(VideoThumbnail)/Thumbnail.js";
import { tsValueToJsonValueFns, jsonValueToTsValueFns, } from "../../../runtime/json/scalar.js";
import { WireType, } from "../../../runtime/wire/index.js";
import { default as serialize, } from "../../../runtime/wire/serialize.js";
import { tsValueToWireValueFns, wireValueToTsValueFns, } from "../../../runtime/wire/scalar.js";
import { default as deserialize, } from "../../../runtime/wire/deserialize.js";
export function getDefaultValue() {
    return {
        type: 0,
        thumbnail: undefined,
    };
}
export function createValue(partialValue) {
    return Object.assign(Object.assign({}, getDefaultValue()), partialValue);
}
export function encodeJson(value) {
    const result = {};
    if (value.type !== undefined)
        result.type = tsValueToJsonValueFns.int32(value.type);
    if (value.thumbnail !== undefined)
        result.thumbnail = encodeJson_1(value.thumbnail);
    return result;
}
export function decodeJson(value) {
    const result = getDefaultValue();
    if (value.type !== undefined)
        result.type = jsonValueToTsValueFns.int32(value.type);
    if (value.thumbnail !== undefined)
        result.thumbnail = decodeJson_1(value.thumbnail);
    return result;
}
export function encodeBinary(value) {
    const result = [];
    if (value.type !== undefined) {
        const tsValue = value.type;
        result.push([1, tsValueToWireValueFns.int32(tsValue)]);
    }
    if (value.thumbnail !== undefined) {
        const tsValue = value.thumbnail;
        result.push([3, { type: WireType.LengthDelimited, value: encodeBinary_1(tsValue) }]);
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
        const value = wireValueToTsValueFns.int32(wireValue);
        if (value === undefined)
            break field;
        result.type = value;
    }
    field: {
        const wireValue = wireFields.get(3);
        if (wireValue === undefined)
            break field;
        const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
        if (value === undefined)
            break field;
        result.thumbnail = value;
    }
    return result;
}
//# sourceMappingURL=VideoThumbnail.js.map