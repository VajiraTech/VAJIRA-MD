import { Type as Params } from "./(Hashtag)/Params.js";
export declare namespace $.youtube {
    type Hashtag = {
        params?: Params;
    };
}
export type Type = $.youtube.Hashtag;
export declare function getDefaultValue(): $.youtube.Hashtag;
export declare function createValue(partialValue: Partial<$.youtube.Hashtag>): $.youtube.Hashtag;
export declare function encodeJson(value: $.youtube.Hashtag): unknown;
export declare function decodeJson(value: any): $.youtube.Hashtag;
export declare function encodeBinary(value: $.youtube.Hashtag): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.Hashtag;
