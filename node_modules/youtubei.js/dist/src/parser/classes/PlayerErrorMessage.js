import Parser from '../index.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import Button from './Button.js';
import { YTNode } from '../helpers.js';
class PlayerErrorMessage extends YTNode {
    constructor(data) {
        var _a;
        super();
        this.subreason = new Text(data.subreason);
        this.reason = new Text(data.reason);
        this.proceed_button = Parser.parseItem(data.proceedButton, Button);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.icon_type = ((_a = data.icon) === null || _a === void 0 ? void 0 : _a.iconType) || null;
    }
}
PlayerErrorMessage.type = 'PlayerErrorMessage';
export default PlayerErrorMessage;
//# sourceMappingURL=PlayerErrorMessage.js.map