import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';
import { timeToSeconds } from '../../utils/Utils.js';
import { YTNode } from '../helpers.js';
class ChildVideo extends YTNode {
    constructor(data) {
        super();
        this.id = data.videoId;
        this.title = new Text(data.title);
        this.duration = {
            text: data.lengthText.simpleText,
            seconds: timeToSeconds(data.lengthText.simpleText)
        };
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    }
}
ChildVideo.type = 'ChildVideo';
export default ChildVideo;
//# sourceMappingURL=ChildVideo.js.map