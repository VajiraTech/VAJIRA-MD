import Parser from '../index.js';
import Text from './misc/Text.js';
import CompactLink from './CompactLink.js';
import { YTNode } from '../helpers.js';
class SettingsSidebar extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.items = Parser.parseArray(data.items, CompactLink);
    }
    get contents() {
        return this.items;
    }
}
SettingsSidebar.type = 'SettingsSidebar';
export default SettingsSidebar;
//# sourceMappingURL=SettingsSidebar.js.map