import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class CallToActionButton extends YTNode {
    constructor(data) {
        super();
        this.label = new Text(data.label);
        this.icon_type = data.icon.iconType;
        this.style = data.style;
    }
}
CallToActionButton.type = 'CallToActionButton';
export default CallToActionButton;
//# sourceMappingURL=CallToActionButton.js.map