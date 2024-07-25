import Parser from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class WatchCardHeroVideo extends YTNode {
    constructor(data) {
        var _a;
        super();
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.call_to_action_button = Parser.parseItem(data.callToActionButton);
        this.hero_image = Parser.parseItem(data.heroImage);
        this.label = ((_a = data.lengthText) === null || _a === void 0 ? void 0 : _a.accessibility.accessibilityData.label) || '';
    }
}
WatchCardHeroVideo.type = 'WatchCardHeroVideo';
export default WatchCardHeroVideo;
//# sourceMappingURL=WatchCardHeroVideo.js.map