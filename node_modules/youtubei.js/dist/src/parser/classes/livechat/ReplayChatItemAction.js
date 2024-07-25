import Parser from '../../index.js';
import { YTNode } from '../../helpers.js';
class ReplayChatItemAction extends YTNode {
    constructor(data) {
        var _a;
        super();
        this.actions = Parser.parseArray((_a = data.actions) === null || _a === void 0 ? void 0 : _a.map((action) => {
            delete action.clickTrackingParams;
            return action;
        }));
        this.video_offset_time_msec = data.videoOffsetTimeMsec;
    }
}
ReplayChatItemAction.type = 'ReplayChatItemAction';
export default ReplayChatItemAction;
//# sourceMappingURL=ReplayChatItemAction.js.map