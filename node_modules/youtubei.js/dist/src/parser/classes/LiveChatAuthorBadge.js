import MetadataBadge from './MetadataBadge.js';
import Thumbnail from './misc/Thumbnail.js';
class LiveChatAuthorBadge extends MetadataBadge {
    constructor(data) {
        super(data);
        this.custom_thumbnail = data.customThumbnail ? Thumbnail.fromResponse(data.customThumbnail) : null;
    }
}
LiveChatAuthorBadge.type = 'LiveChatAuthorBadge';
export default LiveChatAuthorBadge;
//# sourceMappingURL=LiveChatAuthorBadge.js.map