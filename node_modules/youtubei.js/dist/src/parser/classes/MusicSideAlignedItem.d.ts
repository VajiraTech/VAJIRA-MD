import { YTNode } from '../helpers.js';
declare class MusicSideAlignedItem extends YTNode {
    static type: string;
    start_items?: import("../helpers.js").ObservedArray<YTNode> | undefined;
    end_items?: import("../helpers.js").ObservedArray<YTNode> | undefined;
    constructor(data: any);
}
export default MusicSideAlignedItem;
