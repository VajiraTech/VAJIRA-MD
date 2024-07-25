import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class MusicResponsiveListItemFixedColumn extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.text);
        this.display_priority = data.displayPriority;
    }
}
MusicResponsiveListItemFixedColumn.type = 'musicResponsiveListItemFlexColumnRenderer';
export default MusicResponsiveListItemFixedColumn;
//# sourceMappingURL=MusicResponsiveListItemFixedColumn.js.map