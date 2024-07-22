import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
declare class TextHeader extends YTNode {
    static type: string;
    title: Text;
    style: string;
    constructor(data: any);
}
export default TextHeader;
