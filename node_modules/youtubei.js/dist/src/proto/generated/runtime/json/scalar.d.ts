type TsValueToJsonValue<T> = (tsValue: T) => unknown;
type JsonValueToTsValue<T> = (jsonValue: any) => T;
interface TsValueToJsonValueFns {
    int32: TsValueToJsonValue<number>;
    int64: TsValueToJsonValue<string>;
    uint32: TsValueToJsonValue<number>;
    uint64: TsValueToJsonValue<string>;
    sint32: TsValueToJsonValue<number>;
    sint64: TsValueToJsonValue<string>;
    bool: TsValueToJsonValue<boolean>;
    double: TsValueToJsonValue<number>;
    float: TsValueToJsonValue<number>;
    fixed32: TsValueToJsonValue<number>;
    fixed64: TsValueToJsonValue<string>;
    sfixed32: TsValueToJsonValue<number>;
    sfixed64: TsValueToJsonValue<string>;
    string: TsValueToJsonValue<string>;
    bytes: TsValueToJsonValue<Uint8Array>;
    enum: TsValueToJsonValue<string>;
}
interface JsonValueToTsValueFns {
    int32: JsonValueToTsValue<number>;
    int64: JsonValueToTsValue<string>;
    uint32: JsonValueToTsValue<number>;
    uint64: JsonValueToTsValue<string>;
    sint32: JsonValueToTsValue<number>;
    sint64: JsonValueToTsValue<string>;
    bool: JsonValueToTsValue<boolean>;
    double: JsonValueToTsValue<number>;
    float: JsonValueToTsValue<number>;
    fixed32: JsonValueToTsValue<number>;
    fixed64: JsonValueToTsValue<string>;
    sfixed32: JsonValueToTsValue<number>;
    sfixed64: JsonValueToTsValue<string>;
    string: JsonValueToTsValue<string>;
    bytes: JsonValueToTsValue<Uint8Array>;
    enum: JsonValueToTsValue<string>;
}
export declare const tsValueToJsonValueFns: TsValueToJsonValueFns;
export declare const jsonValueToTsValueFns: JsonValueToTsValueFns;
export {};
