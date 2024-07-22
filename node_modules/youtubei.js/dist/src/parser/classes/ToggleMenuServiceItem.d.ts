import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
export default class ToggleMenuServiceItem extends YTNode {
    static type: string;
    text: Text;
    toggled_text: Text;
    icon_type: string;
    toggled_icon_type: string;
    default_endpoint: NavigationEndpoint;
    toggled_endpoint: NavigationEndpoint;
    constructor(data: RawNode);
}
