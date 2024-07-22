import Parser from '../../index.js';
import { YTNode } from '../../helpers.js';
class ShowLiveChatDialogAction extends YTNode {
    constructor(data) {
        super();
        this.dialog = Parser.parseItem(data.dialog);
    }
}
ShowLiveChatDialogAction.type = 'ShowLiveChatDialogAction';
export default ShowLiveChatDialogAction;
//# sourceMappingURL=ShowLiveChatDialogAction.js.map