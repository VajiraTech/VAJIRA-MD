import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';
declare class HeaderLink {
    endpoint: NavigationEndpoint;
    icon: Thumbnail[];
    title: Text;
    constructor(data: any);
}
declare class ChannelHeaderLinks extends YTNode {
    static type: string;
    primary: HeaderLink[];
    secondary: HeaderLink[];
    constructor(data: any);
}
export default ChannelHeaderLinks;
