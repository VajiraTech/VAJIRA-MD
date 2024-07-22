import Text from '../misc/Text.js';
import { YTNode } from '../../helpers.js';
class MarkChatItemsByAuthorAsDeletedAction extends YTNode {
    constructor(data) {
        super();
        this.deleted_state_message = new Text(data.deletedStateMessage);
        this.channel_id = data.externalChannelId;
    }
}
MarkChatItemsByAuthorAsDeletedAction.type = 'MarkChatItemsByAuthorAsDeletedAction';
export default MarkChatItemsByAuthorAsDeletedAction;
//# sourceMappingURL=MarkChatItemsByAuthorAsDeletedAction.js.map