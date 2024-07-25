import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
declare class ProfileColumnStatsEntry extends YTNode {
    static type: string;
    label: Text;
    value: Text;
    constructor(data: any);
}
export default ProfileColumnStatsEntry;
