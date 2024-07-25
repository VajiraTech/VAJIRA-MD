import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class ChannelThumbnailWithLink extends YTNode {
    static type: string;
    thumbnails: Thumbnail[];
    endpoint: NavigationEndpoint;
    label: string;
    constructor(data: any);
}
export default ChannelThumbnailWithLink;
