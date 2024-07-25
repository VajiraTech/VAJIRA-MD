import { ObservedArray, YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import Text from './misc/Text.js';
import SearchFilterGroup from './SearchFilterGroup.js';
import ToggleButton from './ToggleButton.js';
declare class SearchSubMenu extends YTNode {
    static type: string;
    title: Text;
    groups: ObservedArray<SearchFilterGroup> | null;
    button: ToggleButton | null;
    constructor(data: RawNode);
}
export default SearchSubMenu;
