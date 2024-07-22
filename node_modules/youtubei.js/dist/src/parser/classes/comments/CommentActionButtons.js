import Parser from '../../index.js';
import Button from '../Button.js';
import ToggleButton from '../ToggleButton.js';
import CreatorHeart from './CreatorHeart.js';
import { YTNode } from '../../helpers.js';
class CommentActionButtons extends YTNode {
    constructor(data) {
        super();
        this.like_button = Parser.parseItem(data.likeButton, ToggleButton);
        this.dislike_button = Parser.parseItem(data.dislikeButton, ToggleButton);
        this.reply_button = Parser.parseItem(data.replyButton, Button);
        this.creator_heart = Parser.parseItem(data.creatorHeart, CreatorHeart);
    }
}
CommentActionButtons.type = 'CommentActionButtons';
export default CommentActionButtons;
//# sourceMappingURL=CommentActionButtons.js.map