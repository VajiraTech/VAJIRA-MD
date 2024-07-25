import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
import NavigationEndpoint from '../NavigationEndpoint.js';
declare class AnalyticsShortsCarouselCard extends YTNode {
    static type: string;
    title: string;
    shorts: {
        description: string;
        thumbnail_url: string;
        endpoint: NavigationEndpoint;
    }[];
    constructor(data: RawNode);
}
export default AnalyticsShortsCarouselCard;
