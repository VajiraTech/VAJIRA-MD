import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
export default class GuideEntry extends YTNode {
    static type: string;
    title: Text;
    endpoint: NavigationEndpoint;
    icon_type?: string;
    thumbnails?: Thumbnail[];
    badges?: any;
    is_primary: boolean;
    constructor(data: RawNode);
}
