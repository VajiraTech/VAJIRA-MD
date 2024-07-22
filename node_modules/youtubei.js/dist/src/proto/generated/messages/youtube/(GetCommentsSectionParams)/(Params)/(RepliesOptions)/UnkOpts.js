import { tsValueToJsonValueFns, jsonValueToTsValueFns, } from "../../../../../runtime/json/scalar.js";
import { default as serialize, } from "../../../../../runtime/wire/serialize.js";
import { tsValueToWireValueFns, wireValueToTsValueFns, } from "../../../../../runtime/wire/scalar.js";
import { default as deserialize, } from "../../../../../runtime/wire/deserialize.js";
export function getDefaultValue() {
    return {
        unkParam: 0,
    };
}
export function createValue(partialValue) {
    return Object.assign(Object.assign({}, getDefaultValue()), partialValue);
}
export function encodeJson(value) {
    const result = {};
    if (value.unkParam !== undefined)
        result.unkParam = tsValueToJsonValueFns.int32(value.unkParam);
    return result;
}
export function decodeJson(value) {
    const result = getDefaultValue();
    if (value.unkParam !== undefined)
        result.unkParam = jsonValueToTsValueFns.int32(value.unkParam);
    return result;
}
export function encodeBinary(value) {
    const result = [];
    if (value.unkParam !== undefined) {
        const tsValue = value.unkParam;
        result.push([1, tsValueToWireValueFns.int32(tsValue)]);
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
        result.unkParam = value;
    }
    return result;
}
//# sourceMappingURL=UnkOpts.js.map