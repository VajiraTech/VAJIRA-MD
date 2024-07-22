import Text from './misc/Text.js';
import { timeToSeconds } from '../../utils/Utils.js';
import { YTNode } from '../helpers.js';
class WatchCardCompactVideo extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.subtitle = new Text(data.subtitle);
        this.duration = {
            text: new Text(data.lengthText).toString(),
            seconds: timeToSeconds(data.lengthText.simpleText)
        };
        this.style = data.style;
    }
}
WatchCardCompactVideo.type = 'WatchCardCompactVideo';
export default WatchCardCompactVideo;
//# sourceMappingURL=WatchCardCompactVideo.js.map