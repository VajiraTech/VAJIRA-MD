import { YTNode } from '../helpers.js';
declare class BrowseFeedActions extends YTNode {
    static type: string;
    contents: import("../helpers.js").ObservedArray<YTNode>;
    constructor(data: any);
}
export default BrowseFeedActions;
