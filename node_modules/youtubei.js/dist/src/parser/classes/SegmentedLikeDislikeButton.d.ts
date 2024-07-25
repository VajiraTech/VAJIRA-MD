import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import Button from './Button.js';
import ToggleButton from './ToggleButton.js';
declare class SegmentedLikeDislikeButton extends YTNode {
    static type: string;
    like_button: ToggleButton | Button | null;
    dislike_button: ToggleButton | Button | null;
    constructor(data: RawNode);
}
export default SegmentedLikeDislikeButton;
