import Parser from '../../index.js';
import { YTNode } from '../../helpers.js';
class UpdateLiveChatPollAction extends YTNode {
    constructor(data) {
        super();
        this.poll_to_update = Parser.parseItem(data.pollToUpdate);
    }
}
UpdateLiveChatPollAction.type = 'UpdateLiveChatPollAction';
export default UpdateLiveChatPollAction;
//# sourceMappingURL=UpdateLiveChatPollAction.js.map