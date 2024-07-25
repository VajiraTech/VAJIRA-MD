import Parser from '../index.js';
import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class SlimVideoMetadata extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.collapsed_subtitle = new Text(data.collapsedSubtitle);
        this.expanded_subtitle = new Text(data.expandedSubtitle);
        this.owner = Parser.parseItem(data.owner);
        this.description = new Text(data.description);
        this.video_id = data.videoId;
        this.date = new Text(data.dateText);
    }
}
SlimVideoMetadata.type = 'SlimVideoMetadata';
export default SlimVideoMetadata;
//# sourceMappingURL=SlimVideoMetadata.js.map