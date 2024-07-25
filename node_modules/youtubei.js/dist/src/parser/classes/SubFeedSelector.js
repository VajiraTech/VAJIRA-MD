import Parser from '../index.js';
import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class SubFeedSelector extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.options = Parser.parse(data.options);
    }
}
SubFeedSelector.type = 'SubFeedSelector';
export default SubFeedSelector;
//# sourceMappingURL=SubFeedSelector.js.map