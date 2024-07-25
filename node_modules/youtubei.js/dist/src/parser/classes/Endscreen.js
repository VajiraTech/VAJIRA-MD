import Parser from '../index.js';
import { YTNode } from '../helpers.js';
class Endscreen extends YTNode {
    constructor(data) {
        super();
        this.elements = Parser.parseArray(data.elements);
        this.start_ms = data.startMs;
    }
}
Endscreen.type = 'Endscreen';
export default Endscreen;
//# sourceMappingURL=Endscreen.js.map