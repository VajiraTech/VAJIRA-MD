import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class LikeButton extends YTNode {
    constructor(data) {
        var _a;
        super();
        this.target = {
            video_id: data.target.videoId
        };
        this.like_status = data.likeStatus;
        this.likes_allowed = data.likesAllowed;
        if (data.serviceEndpoints) {
            this.endpoints = (_a = data.serviceEndpoints) === null || _a === void 0 ? void 0 : _a.map((endpoint) => new NavigationEndpoint(endpoint));
        }
    }
}
LikeButton.type = 'LikeButton';
export default LikeButton;
//# sourceMappingURL=LikeButton.js.map