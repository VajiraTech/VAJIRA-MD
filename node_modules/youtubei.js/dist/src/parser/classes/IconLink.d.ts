import { YTNode } from '../helpers.js';
import NavigationEndpoint from './NavigationEndpoint.js';
declare class IconLink extends YTNode {
    static type: string;
    icon_type: string;
    tooltip?: string;
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default IconLink;
