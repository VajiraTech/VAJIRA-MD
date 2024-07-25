import { YTNode } from '../../../helpers.js';
class LiveChatPlaceholderItem extends YTNode {
    constructor(data) {
        super();
        this.id = data.id;
        this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
    }
}
LiveChatPlaceholderItem.type = 'LiveChatPlaceholderItem';
export default LiveChatPlaceholderItem;
//# sourceMappingURL=LiveChatPlaceholderItem.js.map