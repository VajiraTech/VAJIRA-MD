import { Type as RepliesOptions } from "./(Params)/RepliesOptions.js";
import { Type as Options } from "./(Params)/Options.js";
export declare namespace $.youtube.GetCommentsSectionParams {
    type Params = {
        unkToken?: string;
        repliesOpts?: RepliesOptions;
        opts?: Options;
        page?: number;
        target: string;
    };
}
export type Type = $.youtube.GetCommentsSectionParams.Params;
export declare function getDefaultValue(): $.youtube.GetCommentsSectionParams.Params;
export declare function createValue(partialValue: Partial<$.youtube.GetCommentsSectionParams.Params>): $.youtube.GetCommentsSectionParams.Params;
export declare function encodeJson(value: $.youtube.GetCommentsSectionParams.Params): unknown;
export declare function decodeJson(value: any): $.youtube.GetCommentsSectionParams.Params;
export declare function encodeBinary(value: $.youtube.GetCommentsSectionParams.Params): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.GetCommentsSectionParams.Params;
