import EventEmitter from '../../utils/EventEmitterLike.js';
import { LiveChatContinuation } from '../index.js';
import VideoInfo from './VideoInfo.js';
import SmoothedQueue from './SmoothedQueue.js';
import AddChatItemAction from '../classes/livechat/AddChatItemAction.js';
import AddLiveChatTickerItemAction from '../classes/livechat/AddLiveChatTickerItemAction.js';
import MarkChatItemAsDeletedAction from '../classes/livechat/MarkChatItemAsDeletedAction.js';
import MarkChatItemsByAuthorAsDeletedAction from '../classes/livechat/MarkChatItemsByAuthorAsDeletedAction.js';
import ReplaceChatItemAction from '../classes/livechat/ReplaceChatItemAction.js';
import ReplayChatItemAction from '../classes/livechat/ReplayChatItemAction.js';
import ShowLiveChatActionPanelAction from '../classes/livechat/ShowLiveChatActionPanelAction.js';
import UpdateDateTextAction from '../classes/livechat/UpdateDateTextAction.js';
import UpdateDescriptionAction from '../classes/livechat/UpdateDescriptionAction.js';
import UpdateTitleAction from '../classes/livechat/UpdateTitleAction.js';
import UpdateToggleButtonTextAction from '../classes/livechat/UpdateToggleButtonTextAction.js';
import UpdateViewershipAction from '../classes/livechat/UpdateViewershipAction.js';
import AddBannerToLiveChatCommand from '../classes/livechat/AddBannerToLiveChatCommand.js';
import RemoveBannerForLiveChatCommand from '../classes/livechat/RemoveBannerForLiveChatCommand.js';
import ShowLiveChatTooltipCommand from '../classes/livechat/ShowLiveChatTooltipCommand.js';
import type { ObservedArray } from '../helpers.js';
import Button from '../classes/Button.js';
import LiveChatAutoModMessage from '../classes/livechat/items/LiveChatAutoModMessage.js';
import LiveChatMembershipItem from '../classes/livechat/items/LiveChatMembershipItem.js';
import LiveChatPaidMessage from '../classes/livechat/items/LiveChatPaidMessage.js';
import LiveChatPaidSticker from '../classes/livechat/items/LiveChatPaidSticker.js';
import LiveChatTextMessage from '../classes/livechat/items/LiveChatTextMessage.js';
import LiveChatViewerEngagementMessage from '../classes/livechat/items/LiveChatViewerEngagementMessage.js';
import ItemMenu from './ItemMenu.js';
import type { IParsedResponse } from '../types/ParsedResponse.js';
export type ChatAction = AddChatItemAction | AddBannerToLiveChatCommand | AddLiveChatTickerItemAction | MarkChatItemAsDeletedAction | MarkChatItemsByAuthorAsDeletedAction | RemoveBannerForLiveChatCommand | ReplaceChatItemAction | ReplayChatItemAction | ShowLiveChatActionPanelAction | ShowLiveChatTooltipCommand;
export type ChatItemWithMenu = LiveChatAutoModMessage | LiveChatMembershipItem | LiveChatPaidMessage | LiveChatPaidSticker | LiveChatTextMessage | LiveChatViewerEngagementMessage;
export interface LiveMetadata {
    title?: UpdateTitleAction;
    description?: UpdateDescriptionAction;
    views?: UpdateViewershipAction;
    likes?: UpdateToggleButtonTextAction;
    date?: UpdateDateTextAction;
}
declare class LiveChat extends EventEmitter {
    #private;
    smoothed_queue: SmoothedQueue;
    initial_info?: LiveChatContinuation;
    metadata?: LiveMetadata;
    running: boolean;
    is_replay: boolean;
    constructor(video_info: VideoInfo);
    on(type: 'start', listener: (initial_data: LiveChatContinuation) => void): void;
    on(type: 'chat-update', listener: (action: ChatAction) => void): void;
    on(type: 'metadata-update', listener: (metadata: LiveMetadata) => void): void;
    on(type: 'error', listener: (err: Error) => void): void;
    on(type: 'end', listener: () => void): void;
    once(type: 'start', listener: (initial_data: LiveChatContinuation) => void): void;
    once(type: 'chat-update', listener: (action: ChatAction) => void): void;
    once(type: 'metadata-update', listener: (metadata: LiveMetadata) => void): void;
    once(type: 'error', listener: (err: Error) => void): void;
    once(type: 'end', listener: () => void): void;
    start(): void;
    stop(): void;
    /**
     * Sends a message.
     * @param text - Text to send.
     */
    sendMessage(text: string): Promise<ObservedArray<AddChatItemAction>>;
    /**
     * Applies given filter to the live chat.
     * @param filter - Filter to apply.
     */
    applyFilter(filter: 'TOP_CHAT' | 'LIVE_CHAT'): void;
    /**
     * Retrieves given chat item's menu.
     */
    getItemMenu(item: ChatItemWithMenu): Promise<ItemMenu>;
    /**
     * Equivalent to "clicking" a button.
     */
    selectButton(button: Button): Promise<IParsedResponse>;
}
export default LiveChat;
