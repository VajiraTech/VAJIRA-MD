import FilterableFeed from '../../core/FilterableFeed.js';
import HashtagHeader from '../classes/HashtagHeader.js';
import RichGrid from '../classes/RichGrid.js';
import type Actions from '../../core/Actions.js';
import type { ApiResponse } from '../../core/Actions.js';
import type ChipCloudChip from '../classes/ChipCloudChip.js';
import type { IBrowseResponse } from '../index.js';
export default class HashtagFeed extends FilterableFeed<IBrowseResponse> {
    header?: HashtagHeader;
    contents: RichGrid;
    constructor(actions: Actions, response: IBrowseResponse | ApiResponse);
    /**
     * Applies given filter and returns a new {@link HashtagFeed} object. Use {@link HashtagFeed.filters} to get available filters.
     * @param filter - Filter to apply.
     */
    applyFilter(filter: string | ChipCloudChip): Promise<HashtagFeed>;
}
