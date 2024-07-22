import Parser from '../index.js';
import { YTNode } from '../helpers.js';
class ProfileColumnStats extends YTNode {
    constructor(data) {
        super();
        this.items = Parser.parseArray(data.items);
    }
    // XXX: alias for consistency
    get contents() {
        return this.items;
    }
}
ProfileColumnStats.type = 'ProfileColumnStats';
export default ProfileColumnStats;
//# sourceMappingURL=ProfileColumnStats.js.map