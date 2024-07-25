import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
declare class ChannelVideoPlayer extends YTNode {
    static type: string;
    id: string;
    title: Text;
    description: Text;
    views: Text;
    published: Text;
    constructor(data: any);
}
export default ChannelVideoPlayer;
