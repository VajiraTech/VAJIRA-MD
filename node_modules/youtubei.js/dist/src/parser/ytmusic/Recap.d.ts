import type Actions from '../../core/Actions.js';
import type { ApiResponse } from '../../core/Actions.js';
import HighlightsCarousel from '../classes/HighlightsCarousel.js';
import MusicCarouselShelf from '../classes/MusicCarouselShelf.js';
import MusicHeader from '../classes/MusicHeader.js';
import Playlist from './Playlist.js';
import ItemSection from '../classes/ItemSection.js';
import Message from '../classes/Message.js';
import type { ObservedArray } from '../helpers.js';
import type { IBrowseResponse } from '../types/ParsedResponse.js';
declare class Recap {
    #private;
    header?: HighlightsCarousel | MusicHeader;
    sections?: ObservedArray<ItemSection | MusicCarouselShelf | Message>;
    constructor(response: ApiResponse, actions: Actions);
    /**
     * Retrieves recap playlist.
     */
    getPlaylist(): Promise<Playlist>;
    get page(): IBrowseResponse;
}
export default Recap;
