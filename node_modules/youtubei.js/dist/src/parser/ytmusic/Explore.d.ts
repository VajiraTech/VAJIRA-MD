import MusicCarouselShelf from '../classes/MusicCarouselShelf.js';
import MusicNavigationButton from '../classes/MusicNavigationButton.js';
import type { ApiResponse } from '../../core/Actions.js';
import type { ObservedArray } from '../helpers.js';
import type { IBrowseResponse } from '../types/ParsedResponse.js';
declare class Explore {
    #private;
    top_buttons: MusicNavigationButton[];
    sections: ObservedArray<MusicCarouselShelf>;
    constructor(response: ApiResponse);
    get page(): IBrowseResponse;
}
export default Explore;
