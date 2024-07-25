import { YTNode } from '../helpers.js';
import { Parser } from '../index.js';
import YpcTrailer from './YpcTrailer.js';
class PlayerLegacyDesktopYpcTrailer extends YTNode {
    constructor(data) {
        super();
        this.video_id = data.trailerVideoId;
        this.title = data.itemTitle;
        this.thumbnail = data.itemThumbnail;
        this.offer_headline = data.offerHeadline;
        this.offer_description = data.offerDescription;
        this.offer_id = data.offerId;
        this.offer_button_text = data.offerButtonText;
        this.video_message = data.fullVideoMessage;
        this.trailer = Parser.parseItem(data.ypcTrailer, YpcTrailer);
    }
}
PlayerLegacyDesktopYpcTrailer.type = 'PlayerLegacyDesktopYpcTrailer';
export default PlayerLegacyDesktopYpcTrailer;
//# sourceMappingURL=PlayerLegacyDesktopYpcTrailer.js.map