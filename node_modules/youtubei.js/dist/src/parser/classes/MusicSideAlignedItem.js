import Parser from '../index.js';
import { YTNode } from '../helpers.js';
class MusicSideAlignedItem extends YTNode {
    constructor(data) {
        super();
        if (data.startItems) {
            this.start_items = Parser.parseArray(data.startItems);
        }
        if (data.endItems) {
            this.end_items = Parser.parseArray(data.endItems);
        }
    }
}
MusicSideAlignedItem.type = 'MusicSideAlignedItem';
export default MusicSideAlignedItem;
//# sourceMappingURL=MusicSideAlignedItem.js.map