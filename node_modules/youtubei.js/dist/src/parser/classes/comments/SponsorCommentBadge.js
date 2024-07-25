import Thumbnail from '../misc/Thumbnail.js';
import { YTNode } from '../../helpers.js';
class SponsorCommentBadge extends YTNode {
    constructor(data) {
        super();
        this.custom_badge = Thumbnail.fromResponse(data.customBadge);
        this.tooltip = data.tooltip;
    }
}
SponsorCommentBadge.type = 'SponsorCommentBadge';
export default SponsorCommentBadge;
//# sourceMappingURL=SponsorCommentBadge.js.map