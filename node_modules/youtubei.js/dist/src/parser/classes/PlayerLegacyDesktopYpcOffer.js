import { YTNode } from '../helpers.js';
class PlayerLegacyDesktopYpcOffer extends YTNode {
    constructor(data) {
        super();
        this.title = data.itemTitle;
        this.thumbnail = data.itemThumbnail;
        this.offer_description = data.offerDescription;
        this.offer_id = data.offerId;
    }
}
PlayerLegacyDesktopYpcOffer.type = 'PlayerLegacyDesktopYpcOffer';
export default PlayerLegacyDesktopYpcOffer;
//# sourceMappingURL=PlayerLegacyDesktopYpcOffer.js.map