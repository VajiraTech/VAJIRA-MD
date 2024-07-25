import { Type as Ids } from "./(Params)/Ids.js";
export declare namespace $.youtube.LiveMessageParams {
    type Params = {
        ids?: Ids;
    };
}
export type Type = $.youtube.LiveMessageParams.Params;
export declare function getDefaultValue(): $.youtube.LiveMessageParams.Params;
export declare function createValue(partialValue: Partial<$.youtube.LiveMessageParams.Params>): $.youtube.LiveMessageParams.Params;
export declare function encodeJson(value: $.youtube.LiveMessageParams.Params): unknown;
export declare function decodeJson(value: any): $.youtube.LiveMessageParams.Params;
export declare function encodeBinary(value: $.youtube.LiveMessageParams.Params): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.LiveMessageParams.Params;
