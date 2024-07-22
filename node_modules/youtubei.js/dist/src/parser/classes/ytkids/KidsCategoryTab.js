import Text from '../misc/Text.js';
import NavigationEndpoint from '../NavigationEndpoint.js';
import { YTNode } from '../../helpers.js';
class KidsCategoryTab extends YTNode {
    constructor(data) {
        var _a, _b;
        super();
        this.title = new Text(data.title);
        this.category_assets = {
            asset_key: (_a = data.categoryAssets) === null || _a === void 0 ? void 0 : _a.assetKey,
            background_color: (_b = data.categoryAssets) === null || _b === void 0 ? void 0 : _b.backgroundColor
        };
        this.category_type = data.categoryType;
        this.endpoint = new NavigationEndpoint(data.endpoint);
    }
}
KidsCategoryTab.type = 'KidsCategoryTab';
export default KidsCategoryTab;
//# sourceMappingURL=KidsCategoryTab.js.map