import { YTNode } from '../helpers.js';
import Parser from '../index.js';
import Button from './Button.js';
import ToggleButton from './ToggleButton.js';
class SegmentedLikeDislikeButton extends YTNode {
    constructor(data) {
        super();
        this.like_button = Parser.parseItem(data.likeButton, [ToggleButton, Button]);
        this.dislike_button = Parser.parseItem(data.dislikeButton, [ToggleButton, Button]);
    }
}
SegmentedLikeDislikeButton.type = 'SegmentedLikeDislikeButton';
export default SegmentedLikeDislikeButton;
//# sourceMappingURL=SegmentedLikeDislikeButton.js.map