import { YTNode } from '../../../helpers.js';
import Parser from '../../../index.js';
import LiveChatBannerHeader from './LiveChatBannerHeader.js';
class LiveChatBanner extends YTNode {
    constructor(data) {
        super();
        this.header = Parser.parseItem(data.header, LiveChatBannerHeader);
        this.contents = Parser.parseItem(data.contents);
        this.action_id = data.actionId;
        this.viewer_is_creator = data.viewerIsCreator;
        this.target_id = data.targetId;
        this.is_stackable = data.isStackable;
        this.background_type = data.backgroundType;
    }
}
LiveChatBanner.type = 'LiveChatBanner';
export default LiveChatBanner;
//# sourceMappingURL=LiveChatBanner.js.map