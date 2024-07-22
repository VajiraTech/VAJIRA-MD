import { YTNode } from '../helpers.js';
import { RawNode } from '../index.js';
declare class YpcTrailer extends YTNode {
    static type: string;
    video_message: string;
    player_response: any;
    constructor(data: RawNode);
}
export default YpcTrailer;
