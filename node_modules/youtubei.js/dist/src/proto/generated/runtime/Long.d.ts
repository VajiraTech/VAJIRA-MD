export declare const UINT16_MAX = 65535;
export declare const UINT32_MAX = 4294967295;
export default class Long extends Uint32Array {
    constructor(lo?: number, hi?: number);
    toString(signed?: boolean): string;
    static parse(text: string): Long;
}
export declare function add(a: Long, b: Long): Long;
export declare function sub(a: Long, b: Long): Long;
export declare function mul(a: Long, b: Long): Long;
export declare function divByTen(value: Long): [Long, number];
export declare function compare(a: Long, b: Long): number;
