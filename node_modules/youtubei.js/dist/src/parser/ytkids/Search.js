import Feed from '../../core/Feed.js';
import ItemSection from '../classes/ItemSection.js';
import { InnertubeError } from '../../utils/Utils.js';
class Search extends Feed {
    constructor(actions, data) {
        super(actions, data);
        this.estimated_results = this.page.estimated_results;
        const item_section = this.memo.getType(ItemSection).first();
        if (!item_section)
            throw new InnertubeError('No item section found in search response.');
        this.contents = item_section.contents;
    }
}
export default Search;
//# sourceMappingURL=Search.js.map