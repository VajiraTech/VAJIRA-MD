import Thumbnail from '../misc/Thumbnail.js';
import { YTNode } from '../../helpers.js';
class AnalyticsVideo extends YTNode {
    constructor(data) {
        super();
        this.title = data.videoTitle;
        this.metadata = {
            views: data.videoDescription.split('·')[0].trim(),
            published: data.videoDescription.split('·')[1].trim(),
            thumbnails: Thumbnail.fromResponse(data.thumbnailDetails),
            duration: data.formattedLength,
            is_short: data.isShort
        };
    }
}
AnalyticsVideo.type = 'AnalyticsVideo';
export default AnalyticsVideo;
//# sourceMappingURL=AnalyticsVideo.js.map