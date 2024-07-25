import Parser from '../index.js';
import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class UniversalWatchCard extends YTNode {
    constructor(data) {
        super();
        this.header = Parser.parseItem(data.header);
        this.call_to_action = Parser.parseItem(data.callToAction);
        this.sections = Parser.parseArray(data.sections);
        if (data.collapsedLabel) {
            this.collapsed_label = new Text(data.collapsedLabel);
        }
    }
}
UniversalWatchCard.type = 'UniversalWatchCard';
export default UniversalWatchCard;
//# sourceMappingURL=UniversalWatchCard.js.map