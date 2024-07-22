import { Type as Thumbnail } from "./(VideoThumbnail)/Thumbnail.js";
export declare namespace $.youtube.InnertubePayload {
    type VideoThumbnail = {
        type: number;
        thumbnail?: Thumbnail;
    };
}
export type Type = $.youtube.InnertubePayload.VideoThumbnail;
export declare function getDefaultValue(): $.youtube.InnertubePayload.VideoThumbnail;
export declare function createValue(partialValue: Partial<$.youtube.InnertubePayload.VideoThumbnail>): $.youtube.InnertubePayload.VideoThumbnail;
export declare function encodeJson(value: $.youtube.InnertubePayload.VideoThumbnail): unknown;
export declare function decodeJson(value: any): $.youtube.InnertubePayload.VideoThumbnail;
export declare function encodeBinary(value: $.youtube.InnertubePayload.VideoThumbnail): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.InnertubePayload.VideoThumbnail;
