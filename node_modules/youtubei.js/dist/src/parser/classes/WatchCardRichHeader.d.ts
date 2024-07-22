import Author from './misc/Author.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
declare class WatchCardRichHeader extends YTNode {
    static type: string;
    title: Text;
    title_endpoint: NavigationEndpoint;
    subtitle: Text;
    author: Author;
    style: string;
    constructor(data: any);
}
export default WatchCardRichHeader;
