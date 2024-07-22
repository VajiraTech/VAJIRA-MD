import { YTNode } from '../helpers.js';
class MusicDownloadStateBadge extends YTNode {
    constructor(data) {
        super();
        this.playlist_id = data.playlistId;
        this.supported_download_states = data.supportedDownloadStates;
    }
}
MusicDownloadStateBadge.type = 'MusicDownloadStateBadge';
export default MusicDownloadStateBadge;
//# sourceMappingURL=MusicDownloadStateBadge.js.map