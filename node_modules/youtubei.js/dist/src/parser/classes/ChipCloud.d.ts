import Button from './Button.js';
import ChipCloudChip from './ChipCloudChip.js';
import { YTNode } from '../helpers.js';
declare class ChipCloud extends YTNode {
    static type: string;
    chips: import("../helpers.js").ObservedArray<ChipCloudChip>;
    next_button: Button | null;
    previous_button: Button | null;
    horizontal_scrollable: any;
    constructor(data: any);
}
export default ChipCloud;
