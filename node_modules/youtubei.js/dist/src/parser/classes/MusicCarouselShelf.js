import Parser from '../index.js';
import MusicTwoRowItem from './MusicTwoRowItem.js';
import MusicResponsiveListItem from './MusicResponsiveListItem.js';
import MusicCarouselShelfBasicHeader from './MusicCarouselShelfBasicHeader.js';
import MusicNavigationButton from './MusicNavigationButton.js';
import { YTNode } from '../helpers.js';
class MusicCarouselShelf extends YTNode {
    constructor(data) {
        super();
        this.header = Parser.parseItem(data.header, MusicCarouselShelfBasicHeader);
        this.contents = Parser.parseArray(data.contents, [MusicTwoRowItem, MusicResponsiveListItem, MusicNavigationButton]);
        this.num_items_per_column = Reflect.has(data, 'numItemsPerColumn') ? parseInt(data.numItemsPerColumn) : null;
    }
}
MusicCarouselShelf.type = 'MusicCarouselShelf';
export default MusicCarouselShelf;
//# sourceMappingURL=MusicCarouselShelf.js.map