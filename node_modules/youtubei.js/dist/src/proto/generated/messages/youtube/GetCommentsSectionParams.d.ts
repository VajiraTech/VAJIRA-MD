import { Type as Context } from "./(GetCommentsSectionParams)/Context.js";
import { Type as Params } from "./(GetCommentsSectionParams)/Params.js";
export declare namespace $.youtube {
    type GetCommentsSectionParams = {
        ctx?: Context;
        unkParam: number;
        params?: Params;
    };
}
export type Type = $.youtube.GetCommentsSectionParams;
export declare function getDefaultValue(): $.youtube.GetCommentsSectionParams;
export declare function createValue(partialValue: Partial<$.youtube.GetCommentsSectionParams>): $.youtube.GetCommentsSectionParams;
export declare function encodeJson(value: $.youtube.GetCommentsSectionParams): unknown;
export declare function decodeJson(value: any): $.youtube.GetCommentsSectionParams;
export declare function encodeBinary(value: $.youtube.GetCommentsSectionParams): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.GetCommentsSectionParams;
