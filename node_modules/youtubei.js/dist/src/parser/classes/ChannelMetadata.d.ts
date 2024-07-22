import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';
declare class ChannelMetadata extends YTNode {
    static type: string;
    title: string;
    description: string;
    url: string;
    rss_urls: any;
    vanity_channel_url: string;
    external_id: string;
    is_family_safe: boolean;
    keywords: string[];
    avatar: Thumbnail[];
    available_countries: string[];
    android_deep_link: string;
    android_appindexing_link: string;
    ios_appindexing_link: string;
    constructor(data: any);
}
export default ChannelMetadata;
