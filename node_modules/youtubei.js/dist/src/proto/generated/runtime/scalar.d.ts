export type ScalarValueTypePath = `.${ScalarValueType}`;
export type ScalarValueTypes = Writable<typeof _scalarValueTypes>;
export type ScalarValueType = ScalarValueTypes[number];
export declare const _scalarValueTypes: readonly ["double", "float", "int32", "int64", "uint32", "uint64", "sint32", "sint64", "fixed32", "fixed64", "sfixed32", "sfixed64", "bool", "string", "bytes"];
export declare const scalarValueTypes: ScalarValueTypes;
type Writable<T extends readonly string[]> = {
    -readonly [K in keyof T]: T[K];
};
export {};
