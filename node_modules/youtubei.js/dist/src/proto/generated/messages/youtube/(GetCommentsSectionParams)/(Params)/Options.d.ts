export declare namespace $.youtube.GetCommentsSectionParams.Params {
    type Options = {
        videoId: string;
        sortBy: number;
        type: number;
    };
}
export type Type = $.youtube.GetCommentsSectionParams.Params.Options;
export declare function getDefaultValue(): $.youtube.GetCommentsSectionParams.Params.Options;
export declare function createValue(partialValue: Partial<$.youtube.GetCommentsSectionParams.Params.Options>): $.youtube.GetCommentsSectionParams.Params.Options;
export declare function encodeJson(value: $.youtube.GetCommentsSectionParams.Params.Options): unknown;
export declare function decodeJson(value: any): $.youtube.GetCommentsSectionParams.Params.Options;
export declare function encodeBinary(value: $.youtube.GetCommentsSectionParams.Params.Options): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.GetCommentsSectionParams.Params.Options;
