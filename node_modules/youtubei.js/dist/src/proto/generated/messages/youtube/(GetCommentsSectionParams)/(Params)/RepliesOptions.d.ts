import { Type as UnkOpts } from "./(RepliesOptions)/UnkOpts.js";
export declare namespace $.youtube.GetCommentsSectionParams.Params {
    type RepliesOptions = {
        commentId: string;
        unkopts?: UnkOpts;
        channelId?: string;
        videoId: string;
        unkParam1: number;
        unkParam2: number;
    };
}
export type Type = $.youtube.GetCommentsSectionParams.Params.RepliesOptions;
export declare function getDefaultValue(): $.youtube.GetCommentsSectionParams.Params.RepliesOptions;
export declare function createValue(partialValue: Partial<$.youtube.GetCommentsSectionParams.Params.RepliesOptions>): $.youtube.GetCommentsSectionParams.Params.RepliesOptions;
export declare function encodeJson(value: $.youtube.GetCommentsSectionParams.Params.RepliesOptions): unknown;
export declare function decodeJson(value: any): $.youtube.GetCommentsSectionParams.Params.RepliesOptions;
export declare function encodeBinary(value: $.youtube.GetCommentsSectionParams.Params.RepliesOptions): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.GetCommentsSectionParams.Params.RepliesOptions;
