import { YTNode } from '../helpers.js';
import NavigationEndpoint from './NavigationEndpoint.js';
class AutomixPreviewVideo extends YTNode {
    constructor(data) {
        var _a, _b;
        super();
        if ((_b = (_a = data === null || data === void 0 ? void 0 : data.content) === null || _a === void 0 ? void 0 : _a.automixPlaylistVideoRenderer) === null || _b === void 0 ? void 0 : _b.navigationEndpoint) {
            this.playlist_video = {
                endpoint: new NavigationEndpoint(data.content.automixPlaylistVideoRenderer.navigationEndpoint)
            };
        }
    }
}
AutomixPreviewVideo.type = 'AutomixPreviewVideo';
export default AutomixPreviewVideo;
//# sourceMappingURL=AutomixPreviewVideo.js.map