import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class SettingBoolean extends YTNode {
    constructor(data) {
        super();
        if (data.title) {
            this.title = new Text(data.title);
        }
        if (data.summary) {
            this.summary = new Text(data.summary);
        }
        if (data.enableServiceEndpoint) {
            this.enable_endpoint = new NavigationEndpoint(data.enableServiceEndpoint);
        }
        if (data.disableServiceEndpoint) {
            this.disable_endpoint = new NavigationEndpoint(data.disableServiceEndpoint);
        }
        this.item_id = data.itemId;
    }
}
SettingBoolean.type = 'SettingBoolean';
export default SettingBoolean;
//# sourceMappingURL=SettingBoolean.js.map