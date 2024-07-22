import { YTNode } from '../../helpers.js';
import Thumbnail from '../misc/Thumbnail.js';
import type { RawNode } from '../../index.js';
declare class CreatorHeart extends YTNode {
    static type: string;
    creator_thumbnail: Thumbnail[];
    heart_icon_type: string;
    heart_color: {
        basic_color_palette_data: {
            foreground_title_color: string;
        };
    };
    hearted_tooltip: string;
    is_hearted: boolean;
    is_enabled: boolean;
    kennedy_heart_color_string: string;
    constructor(data: RawNode);
}
export default CreatorHeart;
