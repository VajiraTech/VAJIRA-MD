import Text from './misc/Text.js';
import { ObservedArray, YTNode } from '../helpers.js';
import ItemSectionTab from './ItemSectionTab.js';
declare class ItemSectionTabbedHeader extends YTNode {
    static type: string;
    title: Text;
    tabs: Array<ItemSectionTab>;
    end_items?: ObservedArray<YTNode>;
    constructor(data: any);
}
export default ItemSectionTabbedHeader;
