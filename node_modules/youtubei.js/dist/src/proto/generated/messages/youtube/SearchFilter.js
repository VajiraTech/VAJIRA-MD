import { encodeJson as encodeJson_1, decodeJson as decodeJson_1, encodeBinary as encodeBinary_1, decodeBinary as decodeBinary_1, } from "./(SearchFilter)/Filters.js";
import { tsValueToJsonValueFns, jsonValueToTsValueFns, } from "../../runtime/json/scalar.js";
import { WireType, } from "../../runtime/wire/index.js";
import { default as serialize, } from "../../runtime/wire/serialize.js";
import { tsValueToWireValueFns, wireValueToTsValueFns, } from "../../runtime/wire/scalar.js";
import { default as deserialize, } from "../../runtime/wire/deserialize.js";
export function getDefaultValue() {
    return {
        sortBy: undefined,
        filters: undefined,
        noFilter: undefined,
    };
}
export function createValue(partialValue) {
    return Object.assign(Object.assign({}, getDefaultValue()), partialValue);
}
export function encodeJson(value) {
    const result = {};
    if (value.sortBy !== undefined)
        result.sortBy = tsValueToJsonValueFns.int32(value.sortBy);
    if (value.filters !== undefined)
        result.filters = encodeJson_1(value.filters);
    if (value.noFilter !== undefined)
        result.noFilter = tsValueToJsonValueFns.int32(value.noFilter);
    return result;
}
export function decodeJson(value) {
    const result = getDefaultValue();
    if (value.sortBy !== undefined)
        result.sortBy = jsonValueToTsValueFns.int32(value.sortBy);
    if (value.filters !== undefined)
        result.filters = decodeJson_1(value.filters);
    if (value.noFilter !== undefined)
        result.noFilter = jsonValueToTsValueFns.int32(value.noFilter);
    return result;
}
export function encodeBinary(value) {
    const result = [];
    if (value.sortBy !== undefined) {
        const tsValue = value.sortBy;
        result.push([1, tsValueToWireValueFns.int32(tsValue)]);
    }
    if (value.filters !== undefined) {
        const tsValue = value.filters;
        result.push([2, { type: WireType.LengthDelimited, value: encodeBinary_1(tsValue) }]);
    }
    if (value.noFilter !== undefined) {
        const tsValue = value.noFilter;
        result.push([19, tsValueToWireValueFns.int32(tsValue)]);
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
        result.sortBy = value;
    }
    field: {
        const wireValue = wireFields.get(2);
        if (wireValue === undefined)
            break field;
        const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
        if (value === undefined)
            break field;
        result.filters = value;
    }
    field: {
        const wireValue = wireFields.get(19);
        if (wireValue === undefined)
            break field;
        const value = wireValueToTsValueFns.int32(wireValue);
        if (value === undefined)
            break field;
        result.noFilter = value;
    }
    return result;
}
//# sourceMappingURL=SearchFilter.js.map