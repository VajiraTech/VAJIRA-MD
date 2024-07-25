import Parser from '../../index.js';
import Text from '../misc/Text.js';
import { YTNode } from '../../helpers.js';
class SimpleMenuHeader extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.buttons = Parser.parse(data.buttons);
    }
}
SimpleMenuHeader.type = 'SimpleMenuHeader';
export default SimpleMenuHeader;
//# sourceMappingURL=SimpleMenuHeader.js.map