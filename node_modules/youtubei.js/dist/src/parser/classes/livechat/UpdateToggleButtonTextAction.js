import Text from '../misc/Text.js';
import { YTNode } from '../../helpers.js';
class UpdateToggleButtonTextAction extends YTNode {
    constructor(data) {
        super();
        this.default_text = new Text(data.defaultText).toString();
        this.toggled_text = new Text(data.toggledText).toString();
        this.button_id = data.buttonId;
    }
}
UpdateToggleButtonTextAction.type = 'UpdateToggleButtonTextAction';
export default UpdateToggleButtonTextAction;
//# sourceMappingURL=UpdateToggleButtonTextAction.js.map