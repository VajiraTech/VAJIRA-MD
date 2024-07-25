export declare namespace $.youtube.LiveMessageParams.Params {
    type Ids = {
        channelId: string;
        videoId: string;
    };
}
export type Type = $.youtube.LiveMessageParams.Params.Ids;
export declare function getDefaultValue(): $.youtube.LiveMessageParams.Params.Ids;
export declare function createValue(partialValue: Partial<$.youtube.LiveMessageParams.Params.Ids>): $.youtube.LiveMessageParams.Params.Ids;
export declare function encodeJson(value: $.youtube.LiveMessageParams.Params.Ids): unknown;
export declare function decodeJson(value: any): $.youtube.LiveMessageParams.Params.Ids;
export declare function encodeBinary(value: $.youtube.LiveMessageParams.Params.Ids): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.LiveMessageParams.Params.Ids;
