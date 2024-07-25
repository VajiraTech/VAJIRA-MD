import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
declare class MusicResponsiveListItemFlexColumn extends YTNode {
    static type: string;
    title: Text;
    display_priority: string;
    constructor(data: any);
}
export default MusicResponsiveListItemFlexColumn;
