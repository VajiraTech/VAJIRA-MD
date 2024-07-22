import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class ExpandableTab extends YTNode {
    static type: string;
    title: string;
    endpoint: NavigationEndpoint;
    selected: boolean;
    content: YTNode | null;
    constructor(data: any);
}
export default ExpandableTab;
