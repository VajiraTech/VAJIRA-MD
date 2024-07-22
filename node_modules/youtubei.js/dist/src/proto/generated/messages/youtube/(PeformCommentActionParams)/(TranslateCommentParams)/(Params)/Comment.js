import { tsValueToJsonValueFns, jsonValueToTsValueFns, } from "../../../../../runtime/json/scalar.js";
import { default as serialize, } from "../../../../../runtime/wire/serialize.js";
import { tsValueToWireValueFns, wireValueToTsValueFns, } from "../../../../../runtime/wire/scalar.js";
import { default as deserialize, } from "../../../../../runtime/wire/deserialize.js";
export function getDefaultValue() {
    return {
        text: "",
    };
}
export function createValue(partialValue) {
    return Object.assign(Object.assign({}, getDefaultValue()), partialValue);
}
export function encodeJson(value) {
    const result = {};
    if (value.text !== undefined)
        result.text = tsValueToJsonValueFns.string(value.text);
    return result;
}
export function decodeJson(value) {
    const result = getDefaultValue();
    if (value.text !== undefined)
        result.text = jsonValueToTsValueFns.string(value.text);
    return result;
}
export function encodeBinary(value) {
    const result = [];
    if (value.text !== undefined) {
        const tsValue = value.text;
        result.push([1, tsValueToWireValueFns.string(tsValue)]);
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
        result.text = value;
    }
    return result;
}
//# sourceMappingURL=Comment.js.map