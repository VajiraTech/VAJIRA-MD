import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
import MusicThumbnail from './MusicThumbnail.js';
import Parser from '../index.js';
import Button from './Button.js';
import IconLink from './IconLink.js';
class MusicCarouselShelfBasicHeader extends YTNode {
    constructor(data) {
        super();
        if (data.strapline) {
            this.strapline = new Text(data.strapline);
        }
        this.title = new Text(data.title);
        // This.label = data.accessibilityData.accessibilityData.label;
        // ^^ redundant?
        if (data.thumbnail) {
            this.thumbnail = Parser.parseItem(data.thumbnail, MusicThumbnail);
        }
        if (data.moreContentButton) {
            this.more_content = Parser.parseItem(data.moreContentButton, Button);
        }
        if (data.endIcons) {
            this.end_icons = Parser.parseArray(data.endIcons, IconLink);
        }
    }
}
MusicCarouselShelfBasicHeader.type = 'MusicCarouselShelfBasicHeader';
export default MusicCarouselShelfBasicHeader;
//# sourceMappingURL=MusicCarouselShelfBasicHeader.js.map