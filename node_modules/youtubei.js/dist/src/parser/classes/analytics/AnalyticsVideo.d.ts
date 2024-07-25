import Thumbnail from '../misc/Thumbnail.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class AnalyticsVideo extends YTNode {
    static type: string;
    title: string;
    metadata: {
        views: string;
        published: string;
        thumbnails: Thumbnail[];
        duration: string;
        is_short: boolean;
    };
    constructor(data: RawNode);
}
export default AnalyticsVideo;
