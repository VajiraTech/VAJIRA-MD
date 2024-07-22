import Long from "../Long.js";
export declare function encode<T extends number | Long>(value: T): T;
export declare function decode<T extends number | Long>(value: T): T;
