import { Type as Params } from "./(TranslateCommentParams)/Params.js";
export declare namespace $.youtube.PeformCommentActionParams {
    type TranslateCommentParams = {
        commentId: string;
        params?: Params;
        targetLanguage: string;
    };
}
export type Type = $.youtube.PeformCommentActionParams.TranslateCommentParams;
export declare function getDefaultValue(): $.youtube.PeformCommentActionParams.TranslateCommentParams;
export declare function createValue(partialValue: Partial<$.youtube.PeformCommentActionParams.TranslateCommentParams>): $.youtube.PeformCommentActionParams.TranslateCommentParams;
export declare function encodeJson(value: $.youtube.PeformCommentActionParams.TranslateCommentParams): unknown;
export declare function decodeJson(value: any): $.youtube.PeformCommentActionParams.TranslateCommentParams;
export declare function encodeBinary(value: $.youtube.PeformCommentActionParams.TranslateCommentParams): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.PeformCommentActionParams.TranslateCommentParams;
