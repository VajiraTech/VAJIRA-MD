import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class VideoInfoCardContent extends YTNode {
    static type: string;
    title: Text;
    channel_name: Text;
    view_count: Text;
    video_thumbnails: Thumbnail[];
    duration: Text;
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default VideoInfoCardContent;
