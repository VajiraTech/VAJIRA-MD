import { Type as Filters } from "./(SearchFilter)/Filters.js";
export declare namespace $.youtube {
    type SearchFilter = {
        sortBy?: number;
        filters?: Filters;
        noFilter?: number;
    };
}
export type Type = $.youtube.SearchFilter;
export declare function getDefaultValue(): $.youtube.SearchFilter;
export declare function createValue(partialValue: Partial<$.youtube.SearchFilter>): $.youtube.SearchFilter;
export declare function encodeJson(value: $.youtube.SearchFilter): unknown;
export declare function decodeJson(value: any): $.youtube.SearchFilter;
export declare function encodeBinary(value: $.youtube.SearchFilter): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.SearchFilter;
