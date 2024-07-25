export declare namespace $.youtube.InnertubePayload {
    type License = {
        type: string;
    };
}
export type Type = $.youtube.InnertubePayload.License;
export declare function getDefaultValue(): $.youtube.InnertubePayload.License;
export declare function createValue(partialValue: Partial<$.youtube.InnertubePayload.License>): $.youtube.InnertubePayload.License;
export declare function encodeJson(value: $.youtube.InnertubePayload.License): unknown;
export declare function decodeJson(value: any): $.youtube.InnertubePayload.License;
export declare function encodeBinary(value: $.youtube.InnertubePayload.License): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.InnertubePayload.License;
