import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import MusicResponsiveListItem from './MusicResponsiveListItem.js';
import { YTNode } from '../helpers.js';
import Button from './Button.js';
declare class MusicShelf extends YTNode {
    static type: string;
    title: Text;
    contents: import("../helpers.js").ObservedArray<MusicResponsiveListItem>;
    endpoint?: NavigationEndpoint;
    continuation?: string;
    bottom_text?: Text;
    bottom_button?: Button | null;
    subheaders?: Array<any>;
    constructor(data: any);
}
export default MusicShelf;
