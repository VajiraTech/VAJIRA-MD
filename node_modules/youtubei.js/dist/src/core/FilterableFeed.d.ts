import ChipCloudChip from '../parser/classes/ChipCloudChip.js';
import Feed from './Feed.js';
import type { ObservedArray } from '../parser/helpers.js';
import type { IParsedResponse } from '../parser/types/ParsedResponse.js';
import type Actions from './Actions.js';
import type { ApiResponse } from './Actions.js';
declare class FilterableFeed<T extends IParsedResponse> extends Feed<T> {
    #private;
    constructor(actions: Actions, data: ApiResponse | T, already_parsed?: boolean);
    /**
     * Returns the filter chips.
     */
    get filter_chips(): ObservedArray<ChipCloudChip>;
    /**
     * Returns available filters.
     */
    get filters(): string[];
    /**
     * Applies given filter and returns a new {@link Feed} object.
     */
    getFilteredFeed(filter: string | ChipCloudChip): Promise<Feed<T>>;
}
export default FilterableFeed;
