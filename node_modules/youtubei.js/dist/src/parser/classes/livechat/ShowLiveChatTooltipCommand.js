import Parser from '../../index.js';
import { YTNode } from '../../helpers.js';
class ShowLiveChatTooltipCommand extends YTNode {
    constructor(data) {
        super();
        this.tooltip = Parser.parseItem(data.tooltip);
    }
}
ShowLiveChatTooltipCommand.type = 'ShowLiveChatTooltipCommand';
export default ShowLiveChatTooltipCommand;
//# sourceMappingURL=ShowLiveChatTooltipCommand.js.map