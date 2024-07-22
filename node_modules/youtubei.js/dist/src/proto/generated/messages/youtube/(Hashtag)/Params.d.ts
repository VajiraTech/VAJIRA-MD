export declare namespace $.youtube.Hashtag {
    type Params = {
        hashtag: string;
        type: number;
    };
}
export type Type = $.youtube.Hashtag.Params;
export declare function getDefaultValue(): $.youtube.Hashtag.Params;
export declare function createValue(partialValue: Partial<$.youtube.Hashtag.Params>): $.youtube.Hashtag.Params;
export declare function encodeJson(value: $.youtube.Hashtag.Params): unknown;
export declare function decodeJson(value: any): $.youtube.Hashtag.Params;
export declare function encodeBinary(value: $.youtube.Hashtag.Params): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.Hashtag.Params;
