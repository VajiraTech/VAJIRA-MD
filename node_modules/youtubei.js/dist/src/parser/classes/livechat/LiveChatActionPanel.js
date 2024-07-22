import Parser from '../../index.js';
import { YTNode } from '../../helpers.js';
class LiveChatActionPanel extends YTNode {
    constructor(data) {
        super();
        this.id = data.id;
        this.contents = Parser.parse(data.contents);
        this.target_id = data.targetId;
    }
}
LiveChatActionPanel.type = 'LiveChatActionPanel';
export default LiveChatActionPanel;
//# sourceMappingURL=LiveChatActionPanel.js.map