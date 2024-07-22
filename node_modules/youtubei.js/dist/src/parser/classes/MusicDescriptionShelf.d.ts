import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
declare class MusicDescriptionShelf extends YTNode {
    static type: string;
    description: Text;
    max_collapsed_lines?: string;
    max_expanded_lines?: string;
    footer: Text;
    constructor(data: any);
}
export default MusicDescriptionShelf;
