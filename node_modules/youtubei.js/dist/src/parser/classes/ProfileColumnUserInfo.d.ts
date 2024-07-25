import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';
declare class ProfileColumnUserInfo extends YTNode {
    static type: string;
    title: Text;
    thumbnails: Thumbnail[];
    constructor(data: any);
}
export default ProfileColumnUserInfo;
