export declare namespace $.youtube.InnertubePayload {
    type AgeRestricted = {
        unkparam: number;
        choice: number;
    };
}
export type Type = $.youtube.InnertubePayload.AgeRestricted;
export declare function getDefaultValue(): $.youtube.InnertubePayload.AgeRestricted;
export declare function createValue(partialValue: Partial<$.youtube.InnertubePayload.AgeRestricted>): $.youtube.InnertubePayload.AgeRestricted;
export declare function encodeJson(value: $.youtube.InnertubePayload.AgeRestricted): unknown;
export declare function decodeJson(value: any): $.youtube.InnertubePayload.AgeRestricted;
export declare function encodeBinary(value: $.youtube.InnertubePayload.AgeRestricted): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.InnertubePayload.AgeRestricted;
