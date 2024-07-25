import { YTNode } from '../../helpers.js';
class CtaGoToCreatorStudio extends YTNode {
    constructor(data) {
        super();
        this.title = data.buttonLabel;
        this.use_new_specs = data.useNewSpecs;
        // Is this even useful?
    }
}
CtaGoToCreatorStudio.type = 'CtaGoToCreatorStudio';
export default CtaGoToCreatorStudio;
//# sourceMappingURL=CtaGoToCreatorStudio.js.map