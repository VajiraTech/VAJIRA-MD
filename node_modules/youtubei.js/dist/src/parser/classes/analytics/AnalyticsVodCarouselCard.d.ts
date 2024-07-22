import Video from './AnalyticsVideo.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class AnalyticsVodCarouselCard extends YTNode {
    static type: string;
    title: string;
    videos: Video[] | null;
    no_data_message?: string;
    constructor(data: RawNode);
}
export default AnalyticsVodCarouselCard;
