import Parser from '../index.js';
import Button from './Button.js';
import ChipCloudChip from './ChipCloudChip.js';
import { YTNode } from '../helpers.js';
class ChipCloud extends YTNode {
    constructor(data) {
        super();
        // TODO: check this assumption that chipcloudchip is always returned
        this.chips = Parser.parseArray(data.chips, ChipCloudChip);
        this.next_button = Parser.parseItem(data.nextButton, Button);
        this.previous_button = Parser.parseItem(data.previousButton, Button);
        this.horizontal_scrollable = data.horizontalScrollable;
    }
}
ChipCloud.type = 'ChipCloud';
export default ChipCloud;
//# sourceMappingURL=ChipCloud.js.map