import Parser from '../index.js';
import { YTNode } from '../helpers.js';
class SingleColumnMusicWatchNextResults extends YTNode {
    constructor(data) {
        super();
        this.contents = Parser.parse(data);
    }
}
SingleColumnMusicWatchNextResults.type = 'SingleColumnMusicWatchNextResults';
export default SingleColumnMusicWatchNextResults;
//# sourceMappingURL=SingleColumnMusicWatchNextResults.js.map