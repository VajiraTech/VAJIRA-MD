import { YTNode } from '../helpers.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
declare class CompactStation extends YTNode {
    static type: string;
    title: Text;
    description: Text;
    video_count: Text;
    endpoint: NavigationEndpoint;
    thumbnail: Thumbnail[];
    constructor(data: any);
}
export default CompactStation;
