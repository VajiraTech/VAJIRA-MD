export declare namespace $.youtube.InnertubePayload {
    type Category = {
        id: number;
    };
}
export type Type = $.youtube.InnertubePayload.Category;
export declare function getDefaultValue(): $.youtube.InnertubePayload.Category;
export declare function createValue(partialValue: Partial<$.youtube.InnertubePayload.Category>): $.youtube.InnertubePayload.Category;
export declare function encodeJson(value: $.youtube.InnertubePayload.Category): unknown;
export declare function decodeJson(value: any): $.youtube.InnertubePayload.Category;
export declare function encodeBinary(value: $.youtube.InnertubePayload.Category): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.InnertubePayload.Category;
