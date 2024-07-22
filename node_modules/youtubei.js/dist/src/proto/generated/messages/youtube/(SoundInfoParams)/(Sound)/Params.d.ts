import { Type as Ids } from "./(Params)/Ids.js";
export declare namespace $.youtube.SoundInfoParams.Sound {
    type Params = {
        ids?: Ids;
    };
}
export type Type = $.youtube.SoundInfoParams.Sound.Params;
export declare function getDefaultValue(): $.youtube.SoundInfoParams.Sound.Params;
export declare function createValue(partialValue: Partial<$.youtube.SoundInfoParams.Sound.Params>): $.youtube.SoundInfoParams.Sound.Params;
export declare function encodeJson(value: $.youtube.SoundInfoParams.Sound.Params): unknown;
export declare function decodeJson(value: any): $.youtube.SoundInfoParams.Sound.Params;
export declare function encodeBinary(value: $.youtube.SoundInfoParams.Sound.Params): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.SoundInfoParams.Sound.Params;
