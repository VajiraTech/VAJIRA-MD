// TODO: refactor this
import Parser from '../index.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import MusicItemThumbnailOverlay from './MusicItemThumbnailOverlay.js';
import Menu from './menus/Menu.js';
import { YTNode } from '../helpers.js';
class MusicTwoRowItem extends YTNode {
    constructor(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
        super();
        this.title = new Text(data.title);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.id =
            ((_b = (_a = this.endpoint) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.browseId) ||
                ((_d = (_c = this.endpoint) === null || _c === void 0 ? void 0 : _c.payload) === null || _d === void 0 ? void 0 : _d.videoId);
        this.subtitle = new Text(data.subtitle);
        this.badges = Parser.parse(data.subtitleBadges);
        const page_type = (_h = (_g = (_f = (_e = this.endpoint) === null || _e === void 0 ? void 0 : _e.payload) === null || _f === void 0 ? void 0 : _f.browseEndpointContextSupportedConfigs) === null || _g === void 0 ? void 0 : _g.browseEndpointContextMusicConfig) === null || _h === void 0 ? void 0 : _h.pageType;
        switch (page_type) {
            case 'MUSIC_PAGE_TYPE_ARTIST':
                this.item_type = 'artist';
                break;
            case 'MUSIC_PAGE_TYPE_PLAYLIST':
                this.item_type = 'playlist';
                break;
            case 'MUSIC_PAGE_TYPE_ALBUM':
                this.item_type = 'album';
                break;
            default:
                if (((_k = (_j = this.endpoint) === null || _j === void 0 ? void 0 : _j.metadata) === null || _k === void 0 ? void 0 : _k.api_url) === '/next') {
                    this.item_type = 'endpoint';
                }
                else if ((_l = this.subtitle.runs) === null || _l === void 0 ? void 0 : _l[0]) {
                    if (this.subtitle.runs[0].text !== 'Song') {
                        this.item_type = 'video';
                    }
                    else {
                        this.item_type = 'song';
                    }
                }
                else if (this.endpoint) {
                    this.item_type = 'endpoint';
                }
                else {
                    this.item_type = 'unknown';
                }
                break;
        }
        if (this.item_type == 'artist') {
            this.subscribers = ((_o = (_m = this.subtitle.runs) === null || _m === void 0 ? void 0 : _m.find((run) => (/^(\d*\.)?\d+[M|K]? subscribers?$/i).test(run.text))) === null || _o === void 0 ? void 0 : _o.text) || '';
        }
        else if (this.item_type == 'playlist') {
            const item_count_run = (_p = this.subtitle.runs) === null || _p === void 0 ? void 0 : _p.find((run) => run.text.match(/\d+ songs|song/));
            this.item_count = item_count_run ? item_count_run.text : null;
        }
        else if (this.item_type == 'album') {
            const artists = (_q = this.subtitle.runs) === null || _q === void 0 ? void 0 : _q.filter((run) => { var _a, _b; return (_b = (_a = run.endpoint) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.browseId.startsWith('UC'); });
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
            this.year = (_r = this.subtitle.runs) === null || _r === void 0 ? void 0 : _r.slice(-1)[0].text;
            if (isNaN(Number(this.year)))
                delete this.year;
        }
        else if (this.item_type == 'video') {
            this.views = ((_t = (_s = this === null || this === void 0 ? void 0 : this.subtitle.runs) === null || _s === void 0 ? void 0 : _s.find((run) => run === null || run === void 0 ? void 0 : run.text.match(/(.*?) views/))) === null || _t === void 0 ? void 0 : _t.text) || 'N/A';
            const author = (_u = this.subtitle.runs) === null || _u === void 0 ? void 0 : _u.find((run) => { var _a, _b, _c; return (_c = (_b = (_a = run.endpoint) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.browseId) === null || _c === void 0 ? void 0 : _c.startsWith('UC'); });
            if (author) {
                this.author = {
                    name: author === null || author === void 0 ? void 0 : author.text,
                    channel_id: (_w = (_v = author === null || author === void 0 ? void 0 : author.endpoint) === null || _v === void 0 ? void 0 : _v.payload) === null || _w === void 0 ? void 0 : _w.browseId,
                    endpoint: author === null || author === void 0 ? void 0 : author.endpoint
                };
            }
        }
        else if (this.item_type == 'song') {
            const artists = (_x = this.subtitle.runs) === null || _x === void 0 ? void 0 : _x.filter((run) => { var _a, _b; return (_b = (_a = run.endpoint) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.browseId.startsWith('UC'); });
            if (artists) {
                this.artists = artists.map((artist) => {
                    var _a, _b;
                    return ({
                        name: artist === null || artist === void 0 ? void 0 : artist.text,
                        channel_id: (_b = (_a = artist === null || artist === void 0 ? void 0 : artist.endpoint) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.browseId,
                        endpoint: artist === null || artist === void 0 ? void 0 : artist.endpoint
                    });
                });
            }
        }
        this.thumbnail = Thumbnail.fromResponse(data.thumbnailRenderer.musicThumbnailRenderer.thumbnail);
        this.thumbnail_overlay = Parser.parseItem(data.thumbnailOverlay, MusicItemThumbnailOverlay);
        this.menu = Parser.parseItem(data.menu, Menu);
    }
}
MusicTwoRowItem.type = 'MusicTwoRowItem';
export default MusicTwoRowItem;
//# sourceMappingURL=MusicTwoRowItem.js.map