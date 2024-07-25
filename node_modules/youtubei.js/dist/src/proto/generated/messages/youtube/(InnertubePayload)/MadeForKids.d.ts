export declare namespace $.youtube.InnertubePayload {
    type MadeForKids = {
        unkparam: number;
        choice: number;
    };
}
export type Type = $.youtube.InnertubePayload.MadeForKids;
export declare function getDefaultValue(): $.youtube.InnertubePayload.MadeForKids;
export declare function createValue(partialValue: Partial<$.youtube.InnertubePayload.MadeForKids>): $.youtube.InnertubePayload.MadeForKids;
export declare function encodeJson(value: $.youtube.InnertubePayload.MadeForKids): unknown;
export declare function decodeJson(value: any): $.youtube.InnertubePayload.MadeForKids;
export declare function encodeBinary(value: $.youtube.InnertubePayload.MadeForKids): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.InnertubePayload.MadeForKids;
