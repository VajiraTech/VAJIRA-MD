import { YTNode } from '../helpers.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
class CompactStation extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.description = new Text(data.description);
        this.video_count = new Text(data.videoCountText);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    }
}
CompactStation.type = 'CompactStation';
export default CompactStation;
//# sourceMappingURL=CompactStation.js.map