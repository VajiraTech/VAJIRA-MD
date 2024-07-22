import Text from '../misc/Text.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class UpdateTitleAction extends YTNode {
    static type: string;
    title: Text;
    constructor(data: RawNode);
}
export default UpdateTitleAction;
