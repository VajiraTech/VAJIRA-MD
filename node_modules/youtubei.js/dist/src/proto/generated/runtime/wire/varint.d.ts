import Long from "../Long.js";
export declare function encode(value: number | Long): Uint8Array;
export type DecodeResult = [
    number,
    Long
];
export declare function decode(dataview: DataView): DecodeResult;
