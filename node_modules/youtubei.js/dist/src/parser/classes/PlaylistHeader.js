import Text from './misc/Text.js';
import Author from './misc/Author.js';
import Parser from '../index.js';
import { YTNode } from '../helpers.js';
class PlaylistHeader extends YTNode {
    constructor(data) {
        super();
        this.id = data.playlistId;
        this.title = new Text(data.title);
        this.stats = data.stats.map((stat) => new Text(stat));
        this.brief_stats = data.briefStats.map((stat) => new Text(stat));
        this.author = new Author(Object.assign(Object.assign({}, data.ownerText), { navigationEndpoint: data.ownerEndpoint }), data.ownerBadges, null);
        this.description = new Text(data.descriptionText);
        this.num_videos = new Text(data.numVideosText);
        this.view_count = new Text(data.viewCountText);
        this.can_share = data.shareData.canShare;
        this.can_delete = data.editableDetails.canDelete;
        this.is_editable = data.isEditable;
        this.privacy = data.privacy;
        this.save_button = Parser.parseItem(data.saveButton);
        this.shuffle_play_button = Parser.parseItem(data.shufflePlayButton);
        this.menu = Parser.parseItem(data.moreActionsMenu);
        this.banner = Parser.parseItem(data.playlistHeaderBanner);
    }
}
PlaylistHeader.type = 'PlaylistHeader';
export default PlaylistHeader;
//# sourceMappingURL=PlaylistHeader.js.map