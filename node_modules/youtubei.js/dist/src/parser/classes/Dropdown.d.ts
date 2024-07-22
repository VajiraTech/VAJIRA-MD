import { ObservedArray, YTNode } from '../helpers.js';
import DropdownItem from './DropdownItem.js';
declare class Dropdown extends YTNode {
    static type: string;
    label: string;
    entries: ObservedArray<DropdownItem>;
    constructor(data: any);
}
export default Dropdown;
