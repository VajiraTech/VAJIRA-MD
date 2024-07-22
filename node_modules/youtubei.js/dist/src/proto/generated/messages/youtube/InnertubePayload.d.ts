import { Type as Context } from "./(InnertubePayload)/Context.js";
import { Type as Title } from "./(InnertubePayload)/Title.js";
import { Type as Description } from "./(InnertubePayload)/Description.js";
import { Type as Tags } from "./(InnertubePayload)/Tags.js";
import { Type as Category } from "./(InnertubePayload)/Category.js";
import { Type as License } from "./(InnertubePayload)/License.js";
import { Type as VideoThumbnail } from "./(InnertubePayload)/VideoThumbnail.js";
import { Type as Privacy } from "./(InnertubePayload)/Privacy.js";
import { Type as MadeForKids } from "./(InnertubePayload)/MadeForKids.js";
import { Type as AgeRestricted } from "./(InnertubePayload)/AgeRestricted.js";
export declare namespace $.youtube {
    type InnertubePayload = {
        context?: Context;
        target?: string;
        title?: Title;
        description?: Description;
        tags?: Tags;
        category?: Category;
        license?: License;
        videoThumbnail?: VideoThumbnail;
        privacy?: Privacy;
        madeForKids?: MadeForKids;
        ageRestricted?: AgeRestricted;
    };
}
export type Type = $.youtube.InnertubePayload;
export declare function getDefaultValue(): $.youtube.InnertubePayload;
export declare function createValue(partialValue: Partial<$.youtube.InnertubePayload>): $.youtube.InnertubePayload;
export declare function encodeJson(value: $.youtube.InnertubePayload): unknown;
export declare function decodeJson(value: any): $.youtube.InnertubePayload;
export declare function encodeBinary(value: $.youtube.InnertubePayload): Uint8Array;
export declare function decodeBinary(binary: Uint8Array): $.youtube.InnertubePayload;
