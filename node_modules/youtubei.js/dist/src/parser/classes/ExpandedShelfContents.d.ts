import { YTNode } from '../helpers.js';
declare class ExpandedShelfContents extends YTNode {
    static type: string;
    items: import("../helpers.js").ObservedArray<YTNode>;
    constructor(data: any);
    get contents(): import("../helpers.js").ObservedArray<YTNode>;
}
export default ExpandedShelfContents;
