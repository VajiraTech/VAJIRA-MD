import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class SimpleCardContent extends YTNode {
    static type: string;
    image: Thumbnail[];
    title: Text;
    display_domain: Text;
    show_link_icon: boolean;
    call_to_action: Text;
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default SimpleCardContent;
