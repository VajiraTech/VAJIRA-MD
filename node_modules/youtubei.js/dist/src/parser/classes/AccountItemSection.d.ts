import AccountItemSectionHeader from './AccountItemSectionHeader.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
declare class AccountItemSection extends YTNode {
    static type: string;
    contents: any;
    header: AccountItemSectionHeader | null;
    constructor(data: RawNode);
}
export default AccountItemSection;
