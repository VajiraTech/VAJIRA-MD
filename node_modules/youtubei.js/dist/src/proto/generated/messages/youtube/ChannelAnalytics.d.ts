import { Type as Params } from "./(ChannelAnalytics)/Params.js";
export declare namespace $.youtube {
    type ChannelAnalytics = {
        params?: Params;
    };
}
export type Type = $.youtube.ChannelAnalytics;
export declare function getDefaultValue(): $.youtube.ChannelAnalytics;
export declare function createValue(partialValue: Partial<$.youtube.ChannelAnalytics>): $.youtube.ChannelAnalytics;
export declare function encodeJson(value: $.youtube.ChannelAnalytics): unknown;
export declare function decodeJson(value: any): $.youtube.ChannelAnalytics;
export declare function encodeBinary(value: $.youtube.ChannelAnalytics): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.ChannelAnalytics;
