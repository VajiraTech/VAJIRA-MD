import { encodeJson as encodeJson_1, decodeJson as decodeJson_1, encodeBinary as encodeBinary_1, decodeBinary as decodeBinary_1, } from "./(TranslateCommentParams)/Params.js";
import { tsValueToJsonValueFns, jsonValueToTsValueFns, } from "../../../runtime/json/scalar.js";
import { WireType, } from "../../../runtime/wire/index.js";
import { default as serialize, } from "../../../runtime/wire/serialize.js";
import { tsValueToWireValueFns, wireValueToTsValueFns, } from "../../../runtime/wire/scalar.js";
import { default as deserialize, } from "../../../runtime/wire/deserialize.js";
export function getDefaultValue() {
    return {
        commentId: "",
        params: undefined,
        targetLanguage: "",
    };
}
export function createValue(partialValue) {
    return Object.assign(Object.assign({}, getDefaultValue()), partialValue);
}
export function encodeJson(value) {
    const result = {};
    if (value.commentId !== undefined)
        result.commentId = tsValueToJsonValueFns.string(value.commentId);
    if (value.params !== undefined)
        result.params = encodeJson_1(value.params);
    if (value.targetLanguage !== undefined)
        result.targetLanguage = tsValueToJsonValueFns.string(value.targetLanguage);
    return result;
}
export function decodeJson(value) {
    const result = getDefaultValue();
    if (value.commentId !== undefined)
        result.commentId = jsonValueToTsValueFns.string(value.commentId);
    if (value.params !== undefined)
        result.params = decodeJson_1(value.params);
    if (value.targetLanguage !== undefined)
        result.targetLanguage = jsonValueToTsValueFns.string(value.targetLanguage);
    return result;
}
export function encodeBinary(value) {
    const result = [];
    if (value.commentId !== undefined) {
        const tsValue = value.commentId;
        result.push([2, tsValueToWireValueFns.string(tsValue)]);
    }
    if (value.params !== undefined) {
        const tsValue = value.params;
        result.push([3, { type: WireType.LengthDelimited, value: encodeBinary_1(tsValue) }]);
    }
    if (value.targetLanguage !== undefined) {
        const tsValue = value.targetLanguage;
        result.push([4, tsValueToWireValueFns.string(tsValue)]);
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
        result.commentId = value;
    }
    field: {
        const wireValue = wireFields.get(3);
        if (wireValue === undefined)
            break field;
        const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
        if (value === undefined)
            break field;
        result.params = value;
    }
    field: {
        const wireValue = wireFields.get(4);
        if (wireValue === undefined)
            break field;
        const value = wireValueToTsValueFns.string(wireValue);
        if (value === undefined)
            break field;
        result.targetLanguage = value;
    }
    return result;
}
//# sourceMappingURL=TranslateCommentParams.js.map