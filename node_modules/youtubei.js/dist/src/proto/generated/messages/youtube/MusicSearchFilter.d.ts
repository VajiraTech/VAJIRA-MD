import { Type as Filters } from "./(MusicSearchFilter)/Filters.js";
export declare namespace $.youtube {
    type MusicSearchFilter = {
        filters?: Filters;
    };
}
export type Type = $.youtube.MusicSearchFilter;
export declare function getDefaultValue(): $.youtube.MusicSearchFilter;
export declare function createValue(partialValue: Partial<$.youtube.MusicSearchFilter>): $.youtube.MusicSearchFilter;
export declare function encodeJson(value: $.youtube.MusicSearchFilter): unknown;
export declare function decodeJson(value: any): $.youtube.MusicSearchFilter;
export declare function encodeBinary(value: $.youtube.MusicSearchFilter): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.MusicSearchFilter;
