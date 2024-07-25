import { Type as Client } from "./(Context)/Client.js";
export declare namespace $.youtube.InnertubePayload {
    type Context = {
        client?: Client;
    };
}
export type Type = $.youtube.InnertubePayload.Context;
export declare function getDefaultValue(): $.youtube.InnertubePayload.Context;
export declare function createValue(partialValue: Partial<$.youtube.InnertubePayload.Context>): $.youtube.InnertubePayload.Context;
export declare function encodeJson(value: $.youtube.InnertubePayload.Context): unknown;
export declare function decodeJson(value: any): $.youtube.InnertubePayload.Context;
export declare function encodeBinary(value: $.youtube.InnertubePayload.Context): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.InnertubePayload.Context;
