import type Actions from '../../core/Actions.js';
import Feed from '../../core/Feed.js';
import ItemSection from '../classes/ItemSection.js';
import BrowseFeedActions from '../classes/BrowseFeedActions.js';
import type { IBrowseResponse } from '../types/ParsedResponse.js';
import type { ApiResponse } from '../../core/Actions.js';
declare class History extends Feed<IBrowseResponse> {
    sections: ItemSection[];
    feed_actions: BrowseFeedActions;
    constructor(actions: Actions, data: ApiResponse | IBrowseResponse, already_parsed?: boolean);
    /**
     * Retrieves next batch of contents.
     */
    getContinuation(): Promise<History>;
}
export default History;
