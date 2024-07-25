import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
declare class GridHeader extends YTNode {
    static type: string;
    title: Text;
    constructor(data: any);
}
export default GridHeader;
