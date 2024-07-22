import { YTNode } from '../helpers.js';
import { RawNode } from '../index.js';
import YpcTrailer from './YpcTrailer.js';
declare class PlayerLegacyDesktopYpcTrailer extends YTNode {
    static type: string;
    video_id: string;
    title: string;
    thumbnail: string;
    offer_headline: string;
    offer_description: string;
    offer_id: string;
    offer_button_text: string;
    video_message: string;
    trailer: YpcTrailer | null;
    constructor(data: RawNode);
}
export default PlayerLegacyDesktopYpcTrailer;
