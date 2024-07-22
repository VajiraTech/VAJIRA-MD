export declare namespace $.youtube.InnertubePayload {
    type Description = {
        text: string;
    };
}
export type Type = $.youtube.InnertubePayload.Description;
export declare function getDefaultValue(): $.youtube.InnertubePayload.Description;
export declare function createValue(partialValue: Partial<$.youtube.InnertubePayload.Description>): $.youtube.InnertubePayload.Description;
export declare function encodeJson(value: $.youtube.InnertubePayload.Description): unknown;
export declare function decodeJson(value: any): $.youtube.InnertubePayload.Description;
export declare function encodeBinary(value: $.youtube.InnertubePayload.Description): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.InnertubePayload.Description;
