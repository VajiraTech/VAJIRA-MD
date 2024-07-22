import { Type as Comment } from "./(Params)/Comment.js";
export declare namespace $.youtube.PeformCommentActionParams.TranslateCommentParams {
    type Params = {
        comment?: Comment;
    };
}
export type Type = $.youtube.PeformCommentActionParams.TranslateCommentParams.Params;
export declare function getDefaultValue(): $.youtube.PeformCommentActionParams.TranslateCommentParams.Params;
export declare function createValue(partialValue: Partial<$.youtube.PeformCommentActionParams.TranslateCommentParams.Params>): $.youtube.PeformCommentActionParams.TranslateCommentParams.Params;
export declare function encodeJson(value: $.youtube.PeformCommentActionParams.TranslateCommentParams.Params): unknown;
export declare function decodeJson(value: any): $.youtube.PeformCommentActionParams.TranslateCommentParams.Params;
export declare function encodeBinary(value: $.youtube.PeformCommentActionParams.TranslateCommentParams.Params): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.PeformCommentActionParams.TranslateCommentParams.Params;
