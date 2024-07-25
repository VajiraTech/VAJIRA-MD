import { YTNode } from '../../helpers.js';
class DimChatItemAction extends YTNode {
    constructor(data) {
        super();
        this.client_assigned_id = data.clientAssignedId;
    }
}
DimChatItemAction.type = 'DimChatItemAction';
export default DimChatItemAction;
//# sourceMappingURL=DimChatItemAction.js.map