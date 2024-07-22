import Feed from '../../core/Feed.js';
import C4TabbedHeader from '../classes/C4TabbedHeader.js';
import ItemSection from '../classes/ItemSection.js';
import { ItemSectionContinuation } from '../index.js';
import type { IBrowseResponse } from '../types/ParsedResponse.js';
import type Actions from '../../core/Actions.js';
import type { ApiResponse } from '../../core/Actions.js';
declare class Channel extends Feed<IBrowseResponse> {
    header?: C4TabbedHeader;
    contents?: ItemSection | ItemSectionContinuation;
    constructor(actions: Actions, data: ApiResponse | IBrowseResponse, already_parsed?: boolean);
    /**
     * Retrieves next batch of videos.
     */
    getContinuation(): Promise<Channel>;
    get has_continuation(): boolean;
}
export default Channel;
