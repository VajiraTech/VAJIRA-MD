import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
import Text from './misc/Text.js';
declare class ItemSectionTab extends YTNode {
    static type: string;
    title: Text;
    selected: boolean;
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default ItemSectionTab;
