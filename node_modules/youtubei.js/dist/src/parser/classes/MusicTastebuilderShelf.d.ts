import Button from './Button.js';
import Text from './misc/Text.js';
import MusicTastebuilderShelfThumbnail from './MusicTastebuilderShelfThumbnail.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
export default class MusicTasteBuilderShelf extends YTNode {
    static type: string;
    thumbnail: MusicTastebuilderShelfThumbnail | null;
    primary_text: Text;
    secondary_text: Text;
    action_button: Button | null;
    is_visible: boolean;
    constructor(data: RawNode);
}
