import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import Button from './Button.js';
import HorizontalCardList from './HorizontalCardList.js';
import { YTNode } from '../helpers.js';
declare class ExpandableMetadata extends YTNode {
    static type: string;
    header: {
        collapsed_title: Text;
        collapsed_thumbnail: Thumbnail[];
        collapsed_label: Text;
        expanded_title: Text;
    };
    expanded_content: HorizontalCardList | null;
    expand_button: Button | null;
    collapse_button: Button | null;
    constructor(data: any);
}
export default ExpandableMetadata;
