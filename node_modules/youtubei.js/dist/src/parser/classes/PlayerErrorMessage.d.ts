import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import Button from './Button.js';
import { YTNode } from '../helpers.js';
declare class PlayerErrorMessage extends YTNode {
    static type: string;
    subreason: Text;
    reason: Text;
    proceed_button: Button | null;
    thumbnails: Thumbnail[];
    icon_type: string | null;
    constructor(data: any);
}
export default PlayerErrorMessage;
