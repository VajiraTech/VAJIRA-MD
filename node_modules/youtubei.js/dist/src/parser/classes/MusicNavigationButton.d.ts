import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class MusicNavigationButton extends YTNode {
    static type: string;
    button_text: string;
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default MusicNavigationButton;
