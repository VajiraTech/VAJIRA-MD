import { YTNode } from '../../helpers.js';
class RemoveChatItemAction extends YTNode {
    constructor(data) {
        super();
        this.target_item_id = data.targetItemId;
    }
}
RemoveChatItemAction.type = 'RemoveChatItemAction';
export default RemoveChatItemAction;
//# sourceMappingURL=RemoveChatItemAction.js.map