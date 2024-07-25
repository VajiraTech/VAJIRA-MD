import Parser from '../../index.js';
import { YTNode } from '../../helpers.js';
class AddLiveChatTickerItemAction extends YTNode {
    constructor(data) {
        super();
        this.item = Parser.parseItem(data.item);
        this.duration_sec = data.durationSec;
    }
}
AddLiveChatTickerItemAction.type = 'AddLiveChatTickerItemAction';
export default AddLiveChatTickerItemAction;
//# sourceMappingURL=AddLiveChatTickerItemAction.js.map