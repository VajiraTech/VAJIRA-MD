import type Actions from '../../core/Actions.js';
import type { ApiResponse } from '../../core/Actions.js';
import MusicShelf from '../classes/MusicShelf.js';
import MusicCarouselShelf from '../classes/MusicCarouselShelf.js';
import MusicPlaylistShelf from '../classes/MusicPlaylistShelf.js';
import MusicImmersiveHeader from '../classes/MusicImmersiveHeader.js';
import MusicVisualHeader from '../classes/MusicVisualHeader.js';
import MusicHeader from '../classes/MusicHeader.js';
import type { IBrowseResponse } from '../types/ParsedResponse.js';
declare class Artist {
    #private;
    header?: MusicImmersiveHeader | MusicVisualHeader | MusicHeader;
    sections: (MusicCarouselShelf | MusicShelf)[];
    constructor(response: ApiResponse, actions: Actions);
    getAllSongs(): Promise<MusicPlaylistShelf | undefined>;
    get page(): IBrowseResponse;
}
export default Artist;
