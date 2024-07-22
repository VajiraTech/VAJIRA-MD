import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
import MusicThumbnail from './MusicThumbnail.js';
import Button from './Button.js';
import IconLink from './IconLink.js';
declare class MusicCarouselShelfBasicHeader extends YTNode {
    static type: string;
    strapline?: Text;
    title: Text;
    thumbnail?: MusicThumbnail | null;
    more_content?: Button | null;
    end_icons?: Array<IconLink>;
    constructor(data: any);
}
export default MusicCarouselShelfBasicHeader;
