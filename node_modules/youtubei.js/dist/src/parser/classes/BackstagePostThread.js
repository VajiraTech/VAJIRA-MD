import Parser from '../index.js';
import { YTNode } from '../helpers.js';
class BackstagePostThread extends YTNode {
    constructor(data) {
        super();
        this.post = Parser.parseItem(data.post);
    }
}
BackstagePostThread.type = 'BackstagePostThread';
export default BackstagePostThread;
//# sourceMappingURL=BackstagePostThread.js.map