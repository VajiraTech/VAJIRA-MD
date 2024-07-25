import { YTNode } from '../helpers.js';
import ChipCloudChip from './ChipCloudChip.js';
declare class FeedFilterChipBar extends YTNode {
    static type: string;
    contents: import("../helpers.js").ObservedArray<ChipCloudChip>;
    constructor(data: any);
}
export default FeedFilterChipBar;
