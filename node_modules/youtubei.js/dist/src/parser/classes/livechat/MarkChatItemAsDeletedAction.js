import Text from '../misc/Text.js';
import { YTNode } from '../../helpers.js';
class MarkChatItemAsDeletedAction extends YTNode {
    constructor(data) {
        super();
        this.deleted_state_message = new Text(data.deletedStateMessage);
        this.target_item_id = data.targetItemId;
    }
}
MarkChatItemAsDeletedAction.type = 'MarkChatItemAsDeletedAction';
export default MarkChatItemAsDeletedAction;
//# sourceMappingURL=MarkChatItemAsDeletedAction.js.map