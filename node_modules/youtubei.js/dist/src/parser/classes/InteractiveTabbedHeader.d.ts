import { ObservedArray, YTNode } from '../helpers.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import SubscribeButton from './SubscribeButton.js';
import MetadataBadge from './MetadataBadge.js';
import Button from './Button.js';
declare class InteractiveTabbedHeader extends YTNode {
    static type: string;
    header_type: string;
    title: Text;
    description: Text;
    metadata: Text;
    badges: MetadataBadge[];
    box_art: Thumbnail[];
    banner: Thumbnail[];
    buttons: ObservedArray<SubscribeButton | Button>;
    auto_generated: Text;
    constructor(data: any);
}
export default InteractiveTabbedHeader;
