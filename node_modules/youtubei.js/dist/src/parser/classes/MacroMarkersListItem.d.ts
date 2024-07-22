import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class MacroMarkersListItem extends YTNode {
    static type: string;
    title: Text;
    time_description: Text;
    thumbnail: Thumbnail[];
    on_tap_endpoint: NavigationEndpoint;
    layout: string;
    is_highlighted: boolean;
    constructor(data: any);
}
export default MacroMarkersListItem;
