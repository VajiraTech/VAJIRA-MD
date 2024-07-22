import { YTNode } from '../helpers.js';
import NavigationEndpoint from './NavigationEndpoint.js';
declare class SortFilterSubMenu extends YTNode {
    static type: string;
    title?: string;
    icon_type?: string;
    label?: string;
    tooltip?: string;
    sub_menu_items?: {
        title: string;
        selected: boolean;
        continuation: string;
        endpoint: NavigationEndpoint;
        subtitle: string | null;
    }[];
    constructor(data: any);
}
export default SortFilterSubMenu;
