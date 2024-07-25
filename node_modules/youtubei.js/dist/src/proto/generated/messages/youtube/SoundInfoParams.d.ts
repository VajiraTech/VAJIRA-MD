import { Type as Sound } from "./(SoundInfoParams)/Sound.js";
export declare namespace $.youtube {
    type SoundInfoParams = {
        sound?: Sound;
    };
}
export type Type = $.youtube.SoundInfoParams;
export declare function getDefaultValue(): $.youtube.SoundInfoParams;
export declare function createValue(partialValue: Partial<$.youtube.SoundInfoParams>): $.youtube.SoundInfoParams;
export declare function encodeJson(value: $.youtube.SoundInfoParams): unknown;
export declare function decodeJson(value: any): $.youtube.SoundInfoParams;
export declare function encodeBinary(value: $.youtube.SoundInfoParams): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.SoundInfoParams;
