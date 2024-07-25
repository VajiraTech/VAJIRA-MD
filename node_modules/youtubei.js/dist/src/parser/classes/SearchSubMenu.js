import { YTNode } from '../helpers.js';
import Parser from '../index.js';
import Text from './misc/Text.js';
import SearchFilterGroup from './SearchFilterGroup.js';
import ToggleButton from './ToggleButton.js';
class SearchSubMenu extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.groups = Parser.parseArray(data.groups, SearchFilterGroup);
        this.button = Parser.parseItem(data.button, ToggleButton);
    }
}
SearchSubMenu.type = 'SearchSubMenu';
export default SearchSubMenu;
//# sourceMappingURL=SearchSubMenu.js.map