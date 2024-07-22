import { YTNode } from '../helpers.js';
import Parser from '../index.js';
class PlaylistSidebarSecondaryInfo extends YTNode {
    constructor(data) {
        super();
        this.owner = Parser.parseItem(data.videoOwner);
        this.button = Parser.parseItem(data.button);
    }
}
PlaylistSidebarSecondaryInfo.type = 'PlaylistSidebarSecondaryInfo';
export default PlaylistSidebarSecondaryInfo;
//# sourceMappingURL=PlaylistSidebarSecondaryInfo.js.map