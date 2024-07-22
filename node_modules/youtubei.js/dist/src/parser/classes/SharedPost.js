import { YTNode } from '../helpers.js';
import Parser from '../parser.js';
import BackstagePost from './BackstagePost.js';
import Button from './Button.js';
import Menu from './menus/Menu.js';
import Author from './misc/Author.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
class SharedPost extends YTNode {
    constructor(data) {
        super();
        this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
        this.content = new Text(data.content);
        this.published = new Text(data.publishedTimeText);
        this.menu = Parser.parseItem(data.actionMenu, Menu);
        this.original_post = Parser.parseItem(data.originalPost, BackstagePost);
        this.id = data.postId;
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.expand_button = Parser.parseItem(data.expandButton, Button);
        this.author = new Author(data.displayName, undefined);
    }
}
SharedPost.type = 'SharedPost';
export default SharedPost;
//# sourceMappingURL=SharedPost.js.map