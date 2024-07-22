import { Type as TranslateCommentParams } from "./(PeformCommentActionParams)/TranslateCommentParams.js";
export declare namespace $.youtube {
    type PeformCommentActionParams = {
        type: number;
        unkNum?: number;
        commentId: string;
        videoId: string;
        channelId?: string;
        translateCommentParams?: TranslateCommentParams;
    };
}
export type Type = $.youtube.PeformCommentActionParams;
export declare function getDefaultValue(): $.youtube.PeformCommentActionParams;
export declare function createValue(partialValue: Partial<$.youtube.PeformCommentActionParams>): $.youtube.PeformCommentActionParams;
export declare function encodeJson(value: $.youtube.PeformCommentActionParams): unknown;
export declare function decodeJson(value: any): $.youtube.PeformCommentActionParams;
export declare function encodeBinary(value: $.youtube.PeformCommentActionParams): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.PeformCommentActionParams;
