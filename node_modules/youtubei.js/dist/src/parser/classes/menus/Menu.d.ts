import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class Menu extends YTNode {
    static type: string;
    items: import("../../helpers.js").ObservedArray<YTNode>;
    top_level_buttons: import("../../helpers.js").ObservedArray<YTNode>;
    label: any;
    constructor(data: RawNode);
    get contents(): import("../../helpers.js").ObservedArray<YTNode>;
}
export default Menu;
