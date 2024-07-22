import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';
class Chapter extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.time_range_start_millis = data.timeRangeStartMillis;
        this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    }
}
Chapter.type = 'Chapter';
export default Chapter;
//# sourceMappingURL=Chapter.js.map