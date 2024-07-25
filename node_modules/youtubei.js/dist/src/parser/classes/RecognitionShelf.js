import Parser from '../index.js';
import { YTNode } from '../helpers.js';
import Button from './Button.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
class RecognitionShelf extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.subtitle = new Text(data.subtitle);
        this.avatars = data.avatars.map((avatar) => new Thumbnail(avatar));
        this.button = Parser.parseItem(data.button, Button);
        this.surface = data.surface;
    }
}
RecognitionShelf.type = 'RecognitionShelf';
export default RecognitionShelf;
//# sourceMappingURL=RecognitionShelf.js.map