export declare namespace $.youtube.SearchFilter {
    type Filters = {
        uploadDate?: number;
        type?: number;
        duration?: number;
        featuresHd?: number;
        featuresSubtitles?: number;
        featuresCreativeCommons?: number;
        features3d?: number;
        featuresLive?: number;
        featuresPurchased?: number;
        features4k?: number;
        features360?: number;
        featuresLocation?: number;
        featuresHdr?: number;
        featuresVr180?: number;
    };
}
export type Type = $.youtube.SearchFilter.Filters;
export declare function getDefaultValue(): $.youtube.SearchFilter.Filters;
export declare function createValue(partialValue: Partial<$.youtube.SearchFilter.Filters>): $.youtube.SearchFilter.Filters;
export declare function encodeJson(value: $.youtube.SearchFilter.Filters): unknown;
export declare function decodeJson(value: any): $.youtube.SearchFilter.Filters;
export declare function encodeBinary(value: $.youtube.SearchFilter.Filters): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.SearchFilter.Filters;
