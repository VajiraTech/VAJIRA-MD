import type { IGuideResponse } from '../types/ParsedResponse.js';
import { IRawResponse } from '../index.js';
import { ObservedArray } from '../helpers.js';
import GuideSection from '../classes/GuideSection.js';
import GuideSubscriptionsSection from '../classes/GuideSubscriptionsSection.js';
export default class Guide {
    #private;
    contents: ObservedArray<GuideSection | GuideSubscriptionsSection>;
    constructor(data: IRawResponse);
    get page(): IGuideResponse;
}
