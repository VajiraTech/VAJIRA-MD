import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class SettingsCheckbox extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.help_text = new Text(data.helpText);
        this.enabled = data.enabled;
        this.disabled = data.disabled;
        this.id = data.id;
    }
}
SettingsCheckbox.type = 'SettingsCheckbox';
export default SettingsCheckbox;
//# sourceMappingURL=SettingsCheckbox.js.map