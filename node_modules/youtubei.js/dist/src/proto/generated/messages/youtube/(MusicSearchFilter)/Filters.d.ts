import { Type as Type_1 } from "./(Filters)/Type.js";
export declare namespace $.youtube.MusicSearchFilter {
    type Filters = {
        type?: Type_1;
    };
}
export type Type = $.youtube.MusicSearchFilter.Filters;
export declare function getDefaultValue(): $.youtube.MusicSearchFilter.Filters;
export declare function createValue(partialValue: Partial<$.youtube.MusicSearchFilter.Filters>): $.youtube.MusicSearchFilter.Filters;
export declare function encodeJson(value: $.youtube.MusicSearchFilter.Filters): unknown;
export declare function decodeJson(value: any): $.youtube.MusicSearchFilter.Filters;
export declare function encodeBinary(value: $.youtube.MusicSearchFilter.Filters): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.MusicSearchFilter.Filters;
