import type Actions from '../../core/Actions.js';
import FilterableFeed from '../../core/FilterableFeed.js';
import ChipCloudChip from '../classes/ChipCloudChip.js';
import FeedTabbedHeader from '../classes/FeedTabbedHeader.js';
import RichGrid from '../classes/RichGrid.js';
import type { IBrowseResponse } from '../types/ParsedResponse.js';
import type { AppendContinuationItemsAction, ReloadContinuationItemsCommand } from '../index.js';
import type { ApiResponse } from '../../core/Actions.js';
export default class HomeFeed extends FilterableFeed<IBrowseResponse> {
    contents: RichGrid | AppendContinuationItemsAction | ReloadContinuationItemsCommand;
    header: FeedTabbedHeader;
    constructor(actions: Actions, data: ApiResponse | IBrowseResponse, already_parsed?: boolean);
    /**
     * Applies given filter to the feed. Use {@link filters} to get available filters.
     * @param filter - Filter to apply.
     */
    applyFilter(filter: string | ChipCloudChip): Promise<HomeFeed>;
    /**
     * Retrieves next batch of contents.
     */
    getContinuation(): Promise<HomeFeed>;
}
