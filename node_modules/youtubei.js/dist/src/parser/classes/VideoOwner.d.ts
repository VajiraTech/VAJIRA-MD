import Text from './misc/Text.js';
import Author from './misc/Author.js';
import { YTNode } from '../helpers.js';
declare class VideoOwner extends YTNode {
    static type: string;
    subscription_button: any;
    subscriber_count: Text;
    author: Author;
    constructor(data: any);
}
export default VideoOwner;
