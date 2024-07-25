import { Type as Params } from "./(Sound)/Params.js";
export declare namespace $.youtube.SoundInfoParams {
    type Sound = {
        params?: Params;
    };
}
export type Type = $.youtube.SoundInfoParams.Sound;
export declare function getDefaultValue(): $.youtube.SoundInfoParams.Sound;
export declare function createValue(partialValue: Partial<$.youtube.SoundInfoParams.Sound>): $.youtube.SoundInfoParams.Sound;
export declare function encodeJson(value: $.youtube.SoundInfoParams.Sound): unknown;
export declare function decodeJson(value: any): $.youtube.SoundInfoParams.Sound;
export declare function encodeBinary(value: $.youtube.SoundInfoParams.Sound): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.SoundInfoParams.Sound;
