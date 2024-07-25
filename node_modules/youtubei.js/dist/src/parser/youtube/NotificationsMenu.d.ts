import SimpleMenuHeader from '../classes/menus/SimpleMenuHeader.js';
import Notification from '../classes/Notification.js';
import type Actions from '../../core/Actions.js';
import type { ApiResponse } from '../../core/Actions.js';
import type { IGetNotificationsMenuResponse } from '../types/ParsedResponse.js';
declare class NotificationsMenu {
    #private;
    header: SimpleMenuHeader;
    contents: Notification[];
    constructor(actions: Actions, response: ApiResponse);
    getContinuation(): Promise<NotificationsMenu>;
    get page(): IGetNotificationsMenuResponse;
}
export default NotificationsMenu;
