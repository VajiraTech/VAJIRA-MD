import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';
declare class ReelItem extends YTNode {
    static type: string;
    id: string;
    title: Text;
    thumbnails: Thumbnail[];
    views: Text;
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default ReelItem;
