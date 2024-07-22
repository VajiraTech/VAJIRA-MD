import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
declare class SimpleCardTeaser extends YTNode {
    static type: string;
    message: Text;
    prominent: boolean;
    constructor(data: any);
}
export default SimpleCardTeaser;
