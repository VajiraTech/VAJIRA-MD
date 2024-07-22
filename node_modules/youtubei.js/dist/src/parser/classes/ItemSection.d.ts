import ItemSectionHeader from './ItemSectionHeader.js';
import { YTNode } from '../helpers.js';
import ItemSectionTabbedHeader from './ItemSectionTabbedHeader.js';
import CommentsHeader from './comments/CommentsHeader.js';
declare class ItemSection extends YTNode {
    static type: string;
    header: CommentsHeader | ItemSectionHeader | ItemSectionTabbedHeader | null;
    contents: import("../helpers.js").ObservedArray<YTNode> | null;
    target_id?: string;
    continuation?: string;
    constructor(data: any);
}
export default ItemSection;
