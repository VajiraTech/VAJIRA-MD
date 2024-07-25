import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
declare class ItemSectionHeader extends YTNode {
    static type: string;
    title: Text;
    constructor(data: any);
}
export default ItemSectionHeader;
