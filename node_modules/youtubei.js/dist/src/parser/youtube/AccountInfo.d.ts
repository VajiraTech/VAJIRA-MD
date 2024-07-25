import type { ApiResponse } from '../../core/Actions.js';
import type { IParsedResponse } from '../types/ParsedResponse.js';
import AccountItemSection from '../classes/AccountItemSection.js';
import AccountChannel from '../classes/AccountChannel.js';
declare class AccountInfo {
    #private;
    contents: AccountItemSection | null;
    footers: AccountChannel | null;
    constructor(response: ApiResponse);
    get page(): IParsedResponse;
}
export default AccountInfo;
