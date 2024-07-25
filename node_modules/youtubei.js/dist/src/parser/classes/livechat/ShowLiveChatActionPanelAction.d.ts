import { YTNode } from '../../helpers.js';
import LiveChatActionPanel from './LiveChatActionPanel.js';
import type { RawNode } from '../../index.js';
declare class ShowLiveChatActionPanelAction extends YTNode {
    static type: string;
    panel_to_show: LiveChatActionPanel | null;
    constructor(data: RawNode);
}
export default ShowLiveChatActionPanelAction;
