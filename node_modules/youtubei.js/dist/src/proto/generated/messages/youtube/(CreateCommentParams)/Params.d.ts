export declare namespace $.youtube.CreateCommentParams {
    type Params = {
        index: number;
    };
}
export type Type = $.youtube.CreateCommentParams.Params;
export declare function getDefaultValue(): $.youtube.CreateCommentParams.Params;
export declare function createValue(partialValue: Partial<$.youtube.CreateCommentParams.Params>): $.youtube.CreateCommentParams.Params;
export declare function encodeJson(value: $.youtube.CreateCommentParams.Params): unknown;
export declare function decodeJson(value: any): $.youtube.CreateCommentParams.Params;
export declare function encodeBinary(value: $.youtube.CreateCommentParams.Params): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.CreateCommentParams.Params;
