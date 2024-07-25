import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';
class ProfileColumnUserInfo extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    }
}
ProfileColumnUserInfo.type = 'ProfileColumnUserInfo';
export default ProfileColumnUserInfo;
//# sourceMappingURL=ProfileColumnUserInfo.js.map