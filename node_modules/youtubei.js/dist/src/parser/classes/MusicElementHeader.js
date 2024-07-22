import Parser from '../index.js';
import Element from './Element.js';
import { YTNode } from '../helpers.js';
class MusicElementHeader extends YTNode {
    constructor(data) {
        super();
        this.element = Reflect.has(data, 'elementRenderer') ? Parser.parseItem(data, Element) : null;
    }
}
MusicElementHeader.type = 'MusicElementHeader';
export default MusicElementHeader;
//# sourceMappingURL=MusicElementHeader.js.map