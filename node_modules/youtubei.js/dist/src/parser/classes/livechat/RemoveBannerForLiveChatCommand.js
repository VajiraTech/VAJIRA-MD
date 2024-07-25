import { YTNode } from '../../helpers.js';
class RemoveBannerForLiveChatCommand extends YTNode {
    constructor(data) {
        super();
        this.target_action_id = data.targetActionId;
    }
}
RemoveBannerForLiveChatCommand.type = 'RemoveBannerForLiveChatCommand';
export default RemoveBannerForLiveChatCommand;
//# sourceMappingURL=RemoveBannerForLiveChatCommand.js.map