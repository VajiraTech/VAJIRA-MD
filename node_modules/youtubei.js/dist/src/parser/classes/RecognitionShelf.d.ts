import { YTNode } from '../helpers.js';
import Button from './Button.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
declare class RecognitionShelf extends YTNode {
    static type: string;
    title: Text;
    subtitle: Text;
    avatars: Thumbnail[];
    button: Button | null;
    surface: string;
    constructor(data: any);
}
export default RecognitionShelf;
