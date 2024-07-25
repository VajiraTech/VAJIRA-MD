import { encodeJson as encodeJson_1, decodeJson as decodeJson_1, encodeBinary as encodeBinary_1, decodeBinary as decodeBinary_1, } from "./(NotificationPreferences)/Preference.js";
import { tsValueToJsonValueFns, jsonValueToTsValueFns, } from "../../runtime/json/scalar.js";
import { WireType, } from "../../runtime/wire/index.js";
import { default as serialize, } from "../../runtime/wire/serialize.js";
import { tsValueToWireValueFns, wireValueToTsValueFns, } from "../../runtime/wire/scalar.js";
import { default as deserialize, } from "../../runtime/wire/deserialize.js";
export function getDefaultValue() {
    return {
        channelId: "",
        prefId: undefined,
        number0: undefined,
        number1: undefined,
    };
}
export function createValue(partialValue) {
    return Object.assign(Object.assign({}, getDefaultValue()), partialValue);
}
export function encodeJson(value) {
    const result = {};
    if (value.channelId !== undefined)
        result.channelId = tsValueToJsonValueFns.string(value.channelId);
    if (value.prefId !== undefined)
        result.prefId = encodeJson_1(value.prefId);
    if (value.number0 !== undefined)
        result.number0 = tsValueToJsonValueFns.int32(value.number0);
    if (value.number1 !== undefined)
        result.number1 = tsValueToJsonValueFns.int32(value.number1);
    return result;
}
export function decodeJson(value) {
    const result = getDefaultValue();
    if (value.channelId !== undefined)
        result.channelId = jsonValueToTsValueFns.string(value.channelId);
    if (value.prefId !== undefined)
        result.prefId = decodeJson_1(value.prefId);
    if (value.number0 !== undefined)
        result.number0 = jsonValueToTsValueFns.int32(value.number0);
    if (value.number1 !== undefined)
        result.number1 = jsonValueToTsValueFns.int32(value.number1);
    return result;
}
export function encodeBinary(value) {
    const result = [];
    if (value.channelId !== undefined) {
        const tsValue = value.channelId;
        result.push([1, tsValueToWireValueFns.string(tsValue)]);
    }
    if (value.prefId !== undefined) {
        const tsValue = value.prefId;
        result.push([2, { type: WireType.LengthDelimited, value: encodeBinary_1(tsValue) }]);
    }
    if (value.number0 !== undefined) {
        const tsValue = value.number0;
        result.push([3, tsValueToWireValueFns.int32(tsValue)]);
    }
    if (value.number1 !== undefined) {
        const tsValue = value.number1;
        result.push([4, tsValueToWireValueFns.int32(tsValue)]);
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
        result.channelId = value;
    }
    field: {
        const wireValue = wireFields.get(2);
        if (wireValue === undefined)
            break field;
        const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
        if (value === undefined)
            break field;
        result.prefId = value;
    }
    field: {
        const wireValue = wireFields.get(3);
        if (wireValue === undefined)
            break field;
        const value = wireValueToTsValueFns.int32(wireValue);
        if (value === undefined)
            break field;
        result.number0 = value;
    }
    field: {
        const wireValue = wireFields.get(4);
        if (wireValue === undefined)
            break field;
        const value = wireValueToTsValueFns.int32(wireValue);
        if (value === undefined)
            break field;
        result.number1 = value;
    }
    return result;
}
//# sourceMappingURL=NotificationPreferences.js.map