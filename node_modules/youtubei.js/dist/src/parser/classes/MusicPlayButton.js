import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class MusicPlayButton extends YTNode {
    constructor(data) {
        var _a;
        super();
        this.endpoint = new NavigationEndpoint(data.playNavigationEndpoint);
        this.play_icon_type = data.playIcon.iconType;
        this.pause_icon_type = data.pauseIcon.iconType;
        if (data.accessibilityPlayData) {
            this.play_label = data.accessibilityPlayData.accessibilityData.label;
        }
        if (data.accessibilityPlayData) {
            this.pause_label = (_a = data.accessibilityPauseData) === null || _a === void 0 ? void 0 : _a.accessibilityData.label;
        }
        this.icon_color = data.iconColor;
    }
}
MusicPlayButton.type = 'MusicPlayButton';
export default MusicPlayButton;
//# sourceMappingURL=MusicPlayButton.js.map