import Parser from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class ChannelSubMenu extends YTNode {
    constructor(data) {
        super();
        this.content_type_sub_menu_items = data.contentTypeSubMenuItems.map((item) => ({
            endpoint: new NavigationEndpoint(item.navigationEndpoint || item.endpoint),
            selected: item.selected,
            title: item.title
        }));
        this.sort_setting = Parser.parseItem(data.sortSetting);
    }
}
ChannelSubMenu.type = 'ChannelSubMenu';
export default ChannelSubMenu;
//# sourceMappingURL=ChannelSubMenu.js.map