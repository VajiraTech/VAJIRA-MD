import Parser from '../../../index.js';
import { YTNode } from '../../../helpers.js';
import Text from '../../misc/Text.js';
import Thumbnail from '../../misc/Thumbnail.js';
import NavigationEndpoint from '../../NavigationEndpoint.js';
class LiveChatProductItem extends YTNode {
    constructor(data) {
        super();
        this.title = data.title;
        this.accessibility_title = data.accessibilityTitle;
        this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
        this.price = data.price;
        this.vendor_name = data.vendorName;
        this.from_vendor_text = data.fromVendorText;
        this.information_button = Parser.parseItem(data.informationButton);
        this.endpoint = new NavigationEndpoint(data.onClickCommand);
        this.creator_message = data.creatorMessage;
        this.creator_name = data.creatorName;
        this.author_photo = Thumbnail.fromResponse(data.authorPhoto);
        this.information_dialog = Parser.parseItem(data.informationDialog);
        this.is_verified = data.isVerified;
        this.creator_custom_message = new Text(data.creatorCustomMessage);
    }
}
LiveChatProductItem.type = 'LiveChatProductItem';
export default LiveChatProductItem;
//# sourceMappingURL=LiveChatProductItem.js.map