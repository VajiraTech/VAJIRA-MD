export declare namespace $.youtube.InnertubePayload {
    type Tags = {
        list: string[];
    };
}
export type Type = $.youtube.InnertubePayload.Tags;
export declare function getDefaultValue(): $.youtube.InnertubePayload.Tags;
export declare function createValue(partialValue: Partial<$.youtube.InnertubePayload.Tags>): $.youtube.InnertubePayload.Tags;
export declare function encodeJson(value: $.youtube.InnertubePayload.Tags): unknown;
export declare function decodeJson(value: any): $.youtube.InnertubePayload.Tags;
export declare function encodeBinary(value: $.youtube.InnertubePayload.Tags): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.InnertubePayload.Tags;
