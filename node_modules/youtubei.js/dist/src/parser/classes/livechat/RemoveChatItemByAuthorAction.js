import { YTNode } from '../../helpers.js';
class RemoveChatItemByAuthorAction extends YTNode {
    constructor(data) {
        super();
        this.external_channel_id = data.externalChannelId;
    }
}
RemoveChatItemByAuthorAction.type = 'RemoveChatItemByAuthorAction';
export default RemoveChatItemByAuthorAction;
//# sourceMappingURL=RemoveChatItemByAuthorAction.js.map