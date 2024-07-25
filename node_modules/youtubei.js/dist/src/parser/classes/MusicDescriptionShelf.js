import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class MusicDescriptionShelf extends YTNode {
    constructor(data) {
        super();
        this.description = new Text(data.description);
        if (this.max_collapsed_lines) {
            this.max_collapsed_lines = data.maxCollapsedLines;
        }
        if (this.max_expanded_lines) {
            this.max_expanded_lines = data.maxExpandedLines;
        }
        this.footer = new Text(data.footer);
    }
}
MusicDescriptionShelf.type = 'MusicDescriptionShelf';
export default MusicDescriptionShelf;
//# sourceMappingURL=MusicDescriptionShelf.js.map