export declare namespace $.youtube.InnertubePayload {
    type Privacy = {
        type: number;
    };
}
export type Type = $.youtube.InnertubePayload.Privacy;
export declare function getDefaultValue(): $.youtube.InnertubePayload.Privacy;
export declare function createValue(partialValue: Partial<$.youtube.InnertubePayload.Privacy>): $.youtube.InnertubePayload.Privacy;
export declare function encodeJson(value: $.youtube.InnertubePayload.Privacy): unknown;
export declare function decodeJson(value: any): $.youtube.InnertubePayload.Privacy;
export declare function encodeBinary(value: $.youtube.InnertubePayload.Privacy): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.InnertubePayload.Privacy;
