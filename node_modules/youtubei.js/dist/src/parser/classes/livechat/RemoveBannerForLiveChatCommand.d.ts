import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class RemoveBannerForLiveChatCommand extends YTNode {
    static type: string;
    target_action_id: string;
    constructor(data: RawNode);
}
export default RemoveBannerForLiveChatCommand;
