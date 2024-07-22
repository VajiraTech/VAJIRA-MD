import { YTNode } from '../helpers.js';
class ThumbnailOverlayResumePlayback extends YTNode {
    constructor(data) {
        super();
        this.percent_duration_watched = data.percentDurationWatched;
    }
}
ThumbnailOverlayResumePlayback.type = 'ThumbnailOverlayResumePlayback';
export default ThumbnailOverlayResumePlayback;
//# sourceMappingURL=ThumbnailOverlayResumePlayback.js.map