import { YTNode } from '../helpers.js';
class MusicInlineBadge extends YTNode {
    constructor(data) {
        super();
        this.icon_type = data.icon.iconType;
        this.label = data.accessibilityData.accessibilityData.label;
    }
}
MusicInlineBadge.type = 'MusicInlineBadge';
export default MusicInlineBadge;
//# sourceMappingURL=MusicInlineBadge.js.map