import { YTNode } from '../helpers.js';
declare class HorizontalList extends YTNode {
    static type: string;
    visible_item_count: string;
    items: import("../helpers.js").ObservedArray<YTNode>;
    constructor(data: any);
    get contents(): import("../helpers.js").ObservedArray<YTNode>;
}
export default HorizontalList;
