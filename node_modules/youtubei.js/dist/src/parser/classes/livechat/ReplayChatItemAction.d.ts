import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class ReplayChatItemAction extends YTNode {
    static type: string;
    actions: import("../../helpers.js").ObservedArray<YTNode>;
    video_offset_time_msec: string;
    constructor(data: RawNode);
}
export default ReplayChatItemAction;
