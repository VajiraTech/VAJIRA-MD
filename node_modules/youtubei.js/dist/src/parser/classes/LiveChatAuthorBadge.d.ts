import MetadataBadge from './MetadataBadge.js';
import Thumbnail from './misc/Thumbnail.js';
declare class LiveChatAuthorBadge extends MetadataBadge {
    static type: string;
    custom_thumbnail: Thumbnail[] | null;
    constructor(data: any);
}
export default LiveChatAuthorBadge;
