import { YTNode } from '../helpers.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Thumbnail from './misc/Thumbnail.js';
declare class HeroPlaylistThumbnail extends YTNode {
    static type: string;
    thumbnails: Thumbnail[];
    on_tap_endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default HeroPlaylistThumbnail;
