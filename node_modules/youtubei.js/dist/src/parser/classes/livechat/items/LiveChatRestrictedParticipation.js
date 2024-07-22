import { YTNode } from '../../../helpers.js';
import Text from '../../misc/Text.js';
class LiveChatRestrictedParticipation extends YTNode {
    constructor(data) {
        var _a;
        super();
        this.message = new Text(data.message);
        this.icon_type = (_a = data === null || data === void 0 ? void 0 : data.icon) === null || _a === void 0 ? void 0 : _a.iconType;
        // TODO: parse onClickCommand
    }
}
export default LiveChatRestrictedParticipation;
//# sourceMappingURL=LiveChatRestrictedParticipation.js.map