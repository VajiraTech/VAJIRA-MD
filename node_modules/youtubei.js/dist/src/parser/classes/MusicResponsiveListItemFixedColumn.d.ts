import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
declare class MusicResponsiveListItemFixedColumn extends YTNode {
    static type: string;
    title: Text;
    display_priority: string;
    constructor(data: any);
}
export default MusicResponsiveListItemFixedColumn;
