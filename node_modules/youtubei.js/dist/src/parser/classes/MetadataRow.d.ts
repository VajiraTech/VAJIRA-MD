import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
declare class MetadataRow extends YTNode {
    static type: string;
    title: Text;
    contents: Text[];
    constructor(data: any);
}
export default MetadataRow;
