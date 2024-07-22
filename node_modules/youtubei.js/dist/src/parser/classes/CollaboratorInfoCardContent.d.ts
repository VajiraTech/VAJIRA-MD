import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class CollaboratorInfoCardContent extends YTNode {
    static type: string;
    channel_avatar: Thumbnail[];
    custom_text: Text;
    channel_name: Text;
    subscriber_count: Text;
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default CollaboratorInfoCardContent;
