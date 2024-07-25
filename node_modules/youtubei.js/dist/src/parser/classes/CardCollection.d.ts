import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
declare class CardCollection extends YTNode {
    static type: string;
    cards: import("../helpers.js").ObservedArray<YTNode>;
    header: Text;
    allow_teaser_dismiss: boolean;
    constructor(data: any);
}
export default CardCollection;
