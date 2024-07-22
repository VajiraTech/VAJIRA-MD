import Video from './AnalyticsVideo.js';
import { YTNode } from '../../helpers.js';
class AnalyticsVodCarouselCard extends YTNode {
    constructor(data) {
        var _a;
        super();
        this.title = data.title;
        if (data.noDataMessage) {
            this.no_data_message = data.noDataMessage;
        }
        this.videos = ((_a = data.videoCarouselData) === null || _a === void 0 ? void 0 : _a.videos.map((video) => new Video(video))) || null;
    }
}
AnalyticsVodCarouselCard.type = 'AnalyticsVodCarouselCard';
export default AnalyticsVodCarouselCard;
//# sourceMappingURL=AnalyticsVodCarouselCard.js.map