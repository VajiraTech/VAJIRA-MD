export declare namespace $.youtube.InnertubePayload {
    type Title = {
        text: string;
    };
}
export type Type = $.youtube.InnertubePayload.Title;
export declare function getDefaultValue(): $.youtube.InnertubePayload.Title;
export declare function createValue(partialValue: Partial<$.youtube.InnertubePayload.Title>): $.youtube.InnertubePayload.Title;
export declare function encodeJson(value: $.youtube.InnertubePayload.Title): unknown;
export declare function decodeJson(value: any): $.youtube.InnertubePayload.Title;
export declare function encodeBinary(value: $.youtube.InnertubePayload.Title): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.InnertubePayload.Title;
