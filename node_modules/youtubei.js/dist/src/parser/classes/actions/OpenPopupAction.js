import Parser from '../../index.js';
import { YTNode } from '../../helpers.js';
class OpenPopupAction extends YTNode {
    constructor(data) {
        super();
        this.popup = Parser.parseItem(data.popup);
        this.popup_type = data.popupType;
    }
}
OpenPopupAction.type = 'OpenPopupAction';
export default OpenPopupAction;
//# sourceMappingURL=OpenPopupAction.js.map