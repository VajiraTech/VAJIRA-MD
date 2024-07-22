import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class GridMix extends YTNode {
    static type: string;
    id: string;
    title: Text;
    author: Text | null;
    thumbnails: Thumbnail[];
    video_count: Text;
    video_count_short: Text;
    endpoint: NavigationEndpoint;
    secondary_endpoint: NavigationEndpoint;
    thumbnail_overlays: import("../helpers.js").ObservedArray<YTNode>;
    constructor(data: any);
}
export default GridMix;
