import { YTNode } from '../helpers.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import SubscribeButton from './SubscribeButton.js';
declare class TopicChannelDetails extends YTNode {
    static type: string;
    title: Text;
    avatar: Thumbnail[];
    subtitle: Text;
    subscribe_button: SubscribeButton | null;
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default TopicChannelDetails;
