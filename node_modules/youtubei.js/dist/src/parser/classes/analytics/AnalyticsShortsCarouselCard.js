import { YTNode } from '../../helpers.js';
import NavigationEndpoint from '../NavigationEndpoint.js';
class AnalyticsShortsCarouselCard extends YTNode {
    constructor(data) {
        super();
        this.title = data.title;
        this.shorts = data.shortsCarouselData.shorts.map((short) => ({
            description: short.shortsDescription,
            thumbnail_url: short.thumbnailUrl,
            endpoint: new NavigationEndpoint(short.videoEndpoint)
        }));
    }
}
AnalyticsShortsCarouselCard.type = 'AnalyticsShortsCarouselCard';
export default AnalyticsShortsCarouselCard;
//# sourceMappingURL=AnalyticsShortsCarouselCard.js.map