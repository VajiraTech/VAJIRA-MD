export declare namespace $.youtube.InnertubePayload.VideoThumbnail {
    type Thumbnail = {
        imageData: Uint8Array;
    };
}
export type Type = $.youtube.InnertubePayload.VideoThumbnail.Thumbnail;
export declare function getDefaultValue(): $.youtube.InnertubePayload.VideoThumbnail.Thumbnail;
export declare function createValue(partialValue: Partial<$.youtube.InnertubePayload.VideoThumbnail.Thumbnail>): $.youtube.InnertubePayload.VideoThumbnail.Thumbnail;
export declare function encodeJson(value: $.youtube.InnertubePayload.VideoThumbnail.Thumbnail): unknown;
export declare function decodeJson(value: any): $.youtube.InnertubePayload.VideoThumbnail.Thumbnail;
export declare function encodeBinary(value: $.youtube.InnertubePayload.VideoThumbnail.Thumbnail): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.InnertubePayload.VideoThumbnail.Thumbnail;
