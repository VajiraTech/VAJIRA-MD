import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class ChipCloudChip extends YTNode {
    static type: string;
    is_selected: boolean;
    endpoint: NavigationEndpoint | undefined;
    text: string;
    constructor(data: any);
}
export default ChipCloudChip;
