import { Type as Params } from "./(CreateCommentParams)/Params.js";
export declare namespace $.youtube {
    type CreateCommentParams = {
        videoId: string;
        params?: Params;
        number: number;
    };
}
export type Type = $.youtube.CreateCommentParams;
export declare function getDefaultValue(): $.youtube.CreateCommentParams;
export declare function createValue(partialValue: Partial<$.youtube.CreateCommentParams>): $.youtube.CreateCommentParams;
export declare function encodeJson(value: $.youtube.CreateCommentParams): unknown;
export declare function decodeJson(value: any): $.youtube.CreateCommentParams;
export declare function encodeBinary(value: $.youtube.CreateCommentParams): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.CreateCommentParams;
