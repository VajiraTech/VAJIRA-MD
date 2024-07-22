import Parser from '../index.js';
import PlaylistPanel from './PlaylistPanel.js';
import { YTNode } from '../helpers.js';
class MusicQueue extends YTNode {
    constructor(data) {
        super();
        this.content = Parser.parseItem(data.content, PlaylistPanel);
    }
}
MusicQueue.type = 'MusicQueue';
export default MusicQueue;
//# sourceMappingURL=MusicQueue.js.map