import { Field, LengthDelimited } from "./index.js";
type WireValueToTsValue<T> = (wireValue: Field) => T | undefined;
type TsValueToWireValue<T> = (tsValue: T) => Field;
type Unpack<T> = (wireValues: Iterable<Field>) => Generator<T>;
type Pack<T> = (values: T[]) => LengthDelimited;
interface WireValueToTsValueFns extends NumericWireValueToTsValueFns {
    string: WireValueToTsValue<string>;
    bytes: WireValueToTsValue<Uint8Array>;
}
interface TsValueToWireValueFns extends TsValueToNumericWireValueFns {
    string: TsValueToWireValue<string>;
    bytes: TsValueToWireValue<Uint8Array>;
}
interface NumericWireValueToTsValueFns extends VarintFieldToTsValueFns {
    double: WireValueToTsValue<number>;
    float: WireValueToTsValue<number>;
    fixed32: WireValueToTsValue<number>;
    fixed64: WireValueToTsValue<string>;
    sfixed32: WireValueToTsValue<number>;
    sfixed64: WireValueToTsValue<string>;
}
interface TsValueToNumericWireValueFns extends TsValueToVarintFieldFns {
    double: TsValueToWireValue<number>;
    float: TsValueToWireValue<number>;
    fixed32: TsValueToWireValue<number>;
    fixed64: TsValueToWireValue<string>;
    sfixed32: TsValueToWireValue<number>;
    sfixed64: TsValueToWireValue<string>;
}
type VarintFieldToTsValueFns = typeof varintFieldToTsValueFns;
declare const varintFieldToTsValueFns: {
    int32: WireValueToTsValue<number>;
    int64: WireValueToTsValue<string>;
    uint32: WireValueToTsValue<number>;
    uint64: WireValueToTsValue<string>;
    sint32: WireValueToTsValue<number>;
    sint64: WireValueToTsValue<string>;
    bool: WireValueToTsValue<boolean>;
};
type TsValueToVarintFieldFns = typeof tsValueToVarintFieldFns;
declare const tsValueToVarintFieldFns: {
    int32: TsValueToWireValue<number>;
    int64: TsValueToWireValue<string>;
    uint32: TsValueToWireValue<number>;
    uint64: TsValueToWireValue<string>;
    sint32: TsValueToWireValue<number>;
    sint64: TsValueToWireValue<string>;
    bool: TsValueToWireValue<boolean>;
};
export declare const wireValueToTsValueFns: WireValueToTsValueFns;
export declare const tsValueToWireValueFns: TsValueToWireValueFns;
type UnpackFns = {
    [type in keyof NumericWireValueToTsValueFns]: Unpack<NonNullable<ReturnType<NumericWireValueToTsValueFns[type]>>>;
};
export declare const unpackFns: UnpackFns;
type PackFns = {
    [type in keyof NumericWireValueToTsValueFns]: Pack<NonNullable<ReturnType<NumericWireValueToTsValueFns[type]>>>;
};
export declare const packFns: PackFns;
export {};
