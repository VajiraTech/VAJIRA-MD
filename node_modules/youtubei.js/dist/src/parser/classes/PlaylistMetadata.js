import { YTNode } from '../helpers.js';
class PlaylistMetadata extends YTNode {
    constructor(data) {
        super();
        this.title = data.title;
        this.description = data.description || null;
        // XXX: Appindexing should be in microformat
    }
}
PlaylistMetadata.type = 'PlaylistMetadata';
export default PlaylistMetadata;
//# sourceMappingURL=PlaylistMetadata.js.map