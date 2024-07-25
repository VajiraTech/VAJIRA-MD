import { Type as Params } from "./(LiveMessageParams)/Params.js";
export declare namespace $.youtube {
    type LiveMessageParams = {
        params?: Params;
        number0?: number;
        number1?: number;
    };
}
export type Type = $.youtube.LiveMessageParams;
export declare function getDefaultValue(): $.youtube.LiveMessageParams;
export declare function createValue(partialValue: Partial<$.youtube.LiveMessageParams>): $.youtube.LiveMessageParams;
export declare function encodeJson(value: $.youtube.LiveMessageParams): unknown;
export declare function decodeJson(value: any): $.youtube.LiveMessageParams;
export declare function encodeBinary(value: $.youtube.LiveMessageParams): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.LiveMessageParams;
