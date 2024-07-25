import Parser from '../../index.js';
import { YTNode } from '../../helpers.js';
class ReplaceChatItemAction extends YTNode {
    constructor(data) {
        super();
        this.target_item_id = data.targetItemId;
        this.replacement_item = Parser.parseItem(data.replacementItem);
    }
}
ReplaceChatItemAction.type = 'ReplaceChatItemAction';
export default ReplaceChatItemAction;
//# sourceMappingURL=ReplaceChatItemAction.js.map