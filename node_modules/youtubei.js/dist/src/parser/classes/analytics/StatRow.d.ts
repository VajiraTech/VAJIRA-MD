import Text from '../misc/Text.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class StatRow extends YTNode {
    static type: string;
    title: Text;
    contents: Text;
    constructor(data: RawNode);
}
export default StatRow;
