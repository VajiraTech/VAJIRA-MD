import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class EndScreenPlaylist extends YTNode {
    static type: string;
    id: string;
    title: Text;
    author: Text;
    endpoint: NavigationEndpoint;
    thumbnails: Thumbnail[];
    video_count: Text;
    constructor(data: any);
}
export default EndScreenPlaylist;
