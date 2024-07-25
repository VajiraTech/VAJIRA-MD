import Element from './Element.js';
import { YTNode } from '../helpers.js';
declare class MusicElementHeader extends YTNode {
    static type: string;
    element: Element | null;
    constructor(data: any);
}
export default MusicElementHeader;
