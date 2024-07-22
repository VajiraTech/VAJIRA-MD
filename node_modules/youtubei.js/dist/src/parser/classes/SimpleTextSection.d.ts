import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
declare class SimpleTextSection extends YTNode {
    static type: string;
    lines: Text[];
    style: string;
    constructor(data: any);
}
export default SimpleTextSection;
