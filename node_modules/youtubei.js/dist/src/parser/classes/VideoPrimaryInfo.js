import { YTNode } from '../helpers.js';
import Parser from '../index.js';
import Text from './misc/Text.js';
import MetadataBadge from './MetadataBadge.js';
import Menu from './menus/Menu.js';
class VideoPrimaryInfo extends YTNode {
    constructor(data) {
        var _a, _b, _c, _d;
        super();
        this.title = new Text(data.title);
        this.super_title_link = new Text(data.superTitleLink);
        this.view_count = new Text((_b = (_a = data.viewCount) === null || _a === void 0 ? void 0 : _a.videoViewCountRenderer) === null || _b === void 0 ? void 0 : _b.viewCount);
        this.short_view_count = new Text((_d = (_c = data.viewCount) === null || _c === void 0 ? void 0 : _c.videoViewCountRenderer) === null || _d === void 0 ? void 0 : _d.shortViewCount);
        this.badges = Parser.parseArray(data.badges, MetadataBadge);
        this.published = new Text(data.dateText);
        this.relative_date = new Text(data.relativeDateText);
        this.menu = Parser.parseItem(data.videoActions, Menu);
    }
}
VideoPrimaryInfo.type = 'VideoPrimaryInfo';
export default VideoPrimaryInfo;
//# sourceMappingURL=VideoPrimaryInfo.js.map