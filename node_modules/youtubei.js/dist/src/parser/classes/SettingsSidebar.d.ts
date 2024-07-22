import Text from './misc/Text.js';
import CompactLink from './CompactLink.js';
import { ObservedArray, YTNode } from '../helpers.js';
declare class SettingsSidebar extends YTNode {
    static type: string;
    title: Text;
    items: ObservedArray<CompactLink>;
    constructor(data: any);
    get contents(): ObservedArray<CompactLink>;
}
export default SettingsSidebar;
