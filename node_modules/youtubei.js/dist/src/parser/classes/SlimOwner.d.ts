import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import SubscribeButton from './SubscribeButton.js';
import { YTNode } from '../helpers.js';
declare class SlimOwner extends YTNode {
    static type: string;
    thumbnail: Thumbnail[];
    title: Text;
    endpoint: NavigationEndpoint;
    subscribe_button: SubscribeButton | null;
    constructor(data: any);
}
export default SlimOwner;
