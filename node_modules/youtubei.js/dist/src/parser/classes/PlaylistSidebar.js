import Parser from '../index.js';
import { YTNode } from '../helpers.js';
class PlaylistSidebar extends YTNode {
    constructor(data) {
        super();
        this.items = Parser.parseArray(data.items);
    }
    // XXX: alias for consistency
    get contents() {
        return this.items;
    }
}
PlaylistSidebar.type = 'PlaylistSidebar';
export default PlaylistSidebar;
//# sourceMappingURL=PlaylistSidebar.js.map