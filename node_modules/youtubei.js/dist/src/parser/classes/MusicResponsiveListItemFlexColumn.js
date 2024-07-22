import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class MusicResponsiveListItemFlexColumn extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.text);
        this.display_priority = data.displayPriority;
    }
}
MusicResponsiveListItemFlexColumn.type = 'musicResponsiveListItemFlexColumnRenderer';
export default MusicResponsiveListItemFlexColumn;
//# sourceMappingURL=MusicResponsiveListItemFlexColumn.js.map