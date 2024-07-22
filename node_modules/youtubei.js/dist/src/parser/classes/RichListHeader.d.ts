import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
declare class RichListHeader extends YTNode {
    static type: string;
    title: Text;
    subtitle: Text;
    title_style: string | undefined;
    icon_type: string;
    constructor(data: any);
}
export default RichListHeader;
