import Parser from '../index.js';
import { YTNode } from '../helpers.js';
import DropdownItem from './DropdownItem.js';
class Dropdown extends YTNode {
    constructor(data) {
        super();
        this.label = data.label || '';
        this.entries = Parser.parseArray(data.entries, DropdownItem);
    }
}
Dropdown.type = 'Dropdown';
export default Dropdown;
//# sourceMappingURL=Dropdown.js.map