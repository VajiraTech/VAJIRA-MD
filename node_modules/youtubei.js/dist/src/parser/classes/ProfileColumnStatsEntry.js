import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class ProfileColumnStatsEntry extends YTNode {
    constructor(data) {
        super();
        this.label = new Text(data.label);
        this.value = new Text(data.value);
    }
}
ProfileColumnStatsEntry.type = 'ProfileColumnStatsEntry';
export default ProfileColumnStatsEntry;
//# sourceMappingURL=ProfileColumnStatsEntry.js.map