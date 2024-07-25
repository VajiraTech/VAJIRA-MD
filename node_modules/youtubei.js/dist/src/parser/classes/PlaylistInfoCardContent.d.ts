import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class PlaylistInfoCardContent extends YTNode {
    static type: string;
    title: Text;
    thumbnails: Thumbnail[];
    video_count: Text;
    channel_name: Text;
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default PlaylistInfoCardContent;
