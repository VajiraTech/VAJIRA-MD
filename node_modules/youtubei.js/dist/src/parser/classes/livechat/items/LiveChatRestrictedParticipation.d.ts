import { YTNode } from '../../../helpers.js';
import Text from '../../misc/Text.js';
import type { RawNode } from '../../../index.js';
declare class LiveChatRestrictedParticipation extends YTNode {
    message: Text;
    icon_type?: string;
    constructor(data: RawNode);
}
export default LiveChatRestrictedParticipation;
