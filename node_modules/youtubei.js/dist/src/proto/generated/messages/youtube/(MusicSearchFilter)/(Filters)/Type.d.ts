export declare namespace $.youtube.MusicSearchFilter.Filters {
    type Type = {
        song?: number;
        video?: number;
        album?: number;
        artist?: number;
        playlist?: number;
    };
}
export type Type = $.youtube.MusicSearchFilter.Filters.Type;
export declare function getDefaultValue(): $.youtube.MusicSearchFilter.Filters.Type;
export declare function createValue(partialValue: Partial<$.youtube.MusicSearchFilter.Filters.Type>): $.youtube.MusicSearchFilter.Filters.Type;
export declare function encodeJson(value: $.youtube.MusicSearchFilter.Filters.Type): unknown;
export declare function decodeJson(value: any): $.youtube.MusicSearchFilter.Filters.Type;
export declare function encodeBinary(value: $.youtube.MusicSearchFilter.Filters.Type): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.MusicSearchFilter.Filters.Type;
