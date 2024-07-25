import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';
declare class LiveChatParticipant extends YTNode {
    static type: string;
    name: Text;
    photo: Thumbnail[];
    badges: import("../helpers.js").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default LiveChatParticipant;
