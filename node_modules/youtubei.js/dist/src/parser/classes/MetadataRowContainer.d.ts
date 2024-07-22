import { YTNode } from '../helpers.js';
declare class MetadataRowContainer extends YTNode {
    static type: string;
    rows: import("../helpers.js").ObservedArray<YTNode>;
    collapsed_item_count: number;
    constructor(data: any);
}
export default MetadataRowContainer;
