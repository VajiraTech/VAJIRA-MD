import Feed from '../../core/Feed.js';
import KidsCategoriesHeader from '../classes/ytkids/KidsCategoriesHeader.js';
import KidsCategoryTab from '../classes/ytkids/KidsCategoryTab.js';
import KidsHomeScreen from '../classes/ytkids/KidsHomeScreen.js';
import type Actions from '../../core/Actions.js';
import type { ApiResponse } from '../../core/Actions.js';
import type { IBrowseResponse } from '../types/ParsedResponse.js';
declare class HomeFeed extends Feed<IBrowseResponse> {
    header?: KidsCategoriesHeader;
    contents?: KidsHomeScreen;
    constructor(actions: Actions, data: ApiResponse | IBrowseResponse, already_parsed?: boolean);
    /**
     * Retrieves the contents of the given category tab. Use {@link HomeFeed.categories} to get a list of available categories.
     * @param tab - The tab to select
     */
    selectCategoryTab(tab: string | KidsCategoryTab): Promise<HomeFeed>;
    get categories(): string[];
}
export default HomeFeed;
