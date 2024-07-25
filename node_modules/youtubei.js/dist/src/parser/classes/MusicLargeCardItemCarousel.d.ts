import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class ActionButton {
    static type: string;
    icon_name: string;
    endpoint: NavigationEndpoint;
    a11y_text: string;
    style: string;
    constructor(data: any);
}
declare class Panel {
    static type: string;
    image: {
        url: string;
        width: number;
        height: number;
    }[];
    content_mode: string;
    crop_options: string;
    image_aspect_ratio: string;
    caption: string;
    action_buttons: ActionButton[];
    constructor(data: any);
}
declare class MusicLargeCardItemCarousel extends YTNode {
    static type: string;
    panels: Panel[];
    header: any;
    constructor(data: any);
}
export default MusicLargeCardItemCarousel;
