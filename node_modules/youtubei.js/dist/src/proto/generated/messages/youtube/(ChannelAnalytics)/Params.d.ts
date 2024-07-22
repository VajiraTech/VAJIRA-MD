export declare namespace $.youtube.ChannelAnalytics {
    type Params = {
        channelId: string;
    };
}
export type Type = $.youtube.ChannelAnalytics.Params;
export declare function getDefaultValue(): $.youtube.ChannelAnalytics.Params;
export declare function createValue(partialValue: Partial<$.youtube.ChannelAnalytics.Params>): $.youtube.ChannelAnalytics.Params;
export declare function encodeJson(value: $.youtube.ChannelAnalytics.Params): unknown;
export declare function decodeJson(value: any): $.youtube.ChannelAnalytics.Params;
export declare function encodeBinary(value: $.youtube.ChannelAnalytics.Params): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.ChannelAnalytics.Params;
