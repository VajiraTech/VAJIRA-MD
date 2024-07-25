import Parser from '../index.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { timeToSeconds } from '../../utils/Utils.js';
import { YTNode } from '../helpers.js';
class PlaylistPanelVideo extends YTNode {
    constructor(data) {
        var _a, _b, _c, _d, _e;
        super();
        this.title = new Text(data.title);
        this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.selected = data.selected;
        this.video_id = data.videoId;
        this.duration = {
            text: new Text(data.lengthText).toString(),
            seconds: timeToSeconds(new Text(data.lengthText).toString())
        };
        const album = (_a = new Text(data.longBylineText).runs) === null || _a === void 0 ? void 0 : _a.find((run) => { var _a, _b, _c; return (_c = (_b = (_a = run.endpoint) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.browseId) === null || _c === void 0 ? void 0 : _c.startsWith('MPR'); });
        const artists = (_b = new Text(data.longBylineText).runs) === null || _b === void 0 ? void 0 : _b.filter((run) => { var _a, _b, _c; return (_c = (_b = (_a = run.endpoint) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.browseId) === null || _c === void 0 ? void 0 : _c.startsWith('UC'); });
        this.author = new Text(data.shortBylineText).toString();
        if (album) {
            this.album = {
                id: (_d = (_c = album.endpoint) === null || _c === void 0 ? void 0 : _c.payload) === null || _d === void 0 ? void 0 : _d.browseId,
                name: album.text,
                year: (_e = new Text(data.longBylineText).runs) === null || _e === void 0 ? void 0 : _e.slice(-1)[0].text,
                endpoint: album.endpoint
            };
        }
        if (artists) {
            this.artists = artists.map((artist) => {
                var _a, _b;
                return ({
                    name: artist.text,
                    channel_id: (_b = (_a = artist.endpoint) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.browseId,
                    endpoint: artist.endpoint
                });
            });
        }
        this.badges = Parser.parseArray(data.badges);
        this.menu = Parser.parseItem(data.menu);
        this.set_video_id = data.playlistSetVideoId;
    }
}
PlaylistPanelVideo.type = 'PlaylistPanelVideo';
export default PlaylistPanelVideo;
//# sourceMappingURL=PlaylistPanelVideo.js.map