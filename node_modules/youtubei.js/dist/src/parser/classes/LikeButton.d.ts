import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class LikeButton extends YTNode {
    static type: string;
    target: {
        video_id: string;
    };
    like_status: string;
    likes_allowed: string;
    endpoints?: NavigationEndpoint[];
    constructor(data: any);
}
export default LikeButton;
