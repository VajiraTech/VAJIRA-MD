export declare namespace $.youtube.GetCommentsSectionParams {
    type Context = {
        videoId: string;
    };
}
export type Type = $.youtube.GetCommentsSectionParams.Context;
export declare function getDefaultValue(): $.youtube.GetCommentsSectionParams.Context;
export declare function createValue(partialValue: Partial<$.youtube.GetCommentsSectionParams.Context>): $.youtube.GetCommentsSectionParams.Context;
export declare function encodeJson(value: $.youtube.GetCommentsSectionParams.Context): unknown;
export declare function decodeJson(value: any): $.youtube.GetCommentsSectionParams.Context;
export declare function encodeBinary(value: $.youtube.GetCommentsSectionParams.Context): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.GetCommentsSectionParams.Context;
