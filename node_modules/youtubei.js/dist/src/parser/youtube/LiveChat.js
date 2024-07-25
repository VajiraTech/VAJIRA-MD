var _LiveChat_instances, _LiveChat_actions, _LiveChat_video_id, _LiveChat_channel_id, _LiveChat_continuation, _LiveChat_mcontinuation, _LiveChat_retry_count, _LiveChat_pollLivechat, _LiveChat_emitSmoothedActions, _LiveChat_pollMetadata, _LiveChat_wait;
import { __awaiter, __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import EventEmitter from '../../utils/EventEmitterLike.js';
import Parser, { LiveChatContinuation } from '../index.js';
import SmoothedQueue from './SmoothedQueue.js';
import AddChatItemAction from '../classes/livechat/AddChatItemAction.js';
import UpdateDateTextAction from '../classes/livechat/UpdateDateTextAction.js';
import UpdateDescriptionAction from '../classes/livechat/UpdateDescriptionAction.js';
import UpdateTitleAction from '../classes/livechat/UpdateTitleAction.js';
import UpdateToggleButtonTextAction from '../classes/livechat/UpdateToggleButtonTextAction.js';
import UpdateViewershipAction from '../classes/livechat/UpdateViewershipAction.js';
import Proto from '../../proto/index.js';
import { InnertubeError, Platform } from '../../utils/Utils.js';
import ItemMenu from './ItemMenu.js';
import { NavigationEndpoint } from '../nodes.js';
class LiveChat extends EventEmitter {
    constructor(video_info) {
        var _a, _b;
        super();
        _LiveChat_instances.add(this);
        _LiveChat_actions.set(this, void 0);
        _LiveChat_video_id.set(this, void 0);
        _LiveChat_channel_id.set(this, void 0);
        _LiveChat_continuation.set(this, void 0);
        _LiveChat_mcontinuation.set(this, void 0);
        _LiveChat_retry_count.set(this, 0);
        this.running = false;
        this.is_replay = false;
        __classPrivateFieldSet(this, _LiveChat_video_id, video_info.basic_info.id, "f");
        __classPrivateFieldSet(this, _LiveChat_channel_id, video_info.basic_info.channel_id, "f");
        __classPrivateFieldSet(this, _LiveChat_actions, video_info.actions, "f");
        __classPrivateFieldSet(this, _LiveChat_continuation, (_a = video_info.livechat) === null || _a === void 0 ? void 0 : _a.continuation, "f");
        this.is_replay = ((_b = video_info.livechat) === null || _b === void 0 ? void 0 : _b.is_replay) || false;
        this.smoothed_queue = new SmoothedQueue();
        this.smoothed_queue.callback = (actions) => __awaiter(this, void 0, void 0, function* () {
            if (!actions.length) {
                // Wait 2 seconds before requesting an incremental continuation if the action group is empty.
                yield __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_wait).call(this, 2000);
            }
            else if (actions.length < 10) {
                // If there are less than 10 actions, wait until all of them are emitted.
                yield __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_emitSmoothedActions).call(this, actions);
            }
            else if (this.is_replay) {
                /**
                 * NOTE: Live chat replays require data from the video player for actions to be emitted timely
                 * and as we don't have that, this ends up being quite innacurate.
                 */
                __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_emitSmoothedActions).call(this, actions);
                yield __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_wait).call(this, 2000);
            }
            else {
                // There are more than 10 actions, emit them asynchonously so we can request the next incremental continuation.
                __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_emitSmoothedActions).call(this, actions);
            }
            if (this.running) {
                __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_pollLivechat).call(this);
            }
        });
    }
    on(type, listener) {
        super.on(type, listener);
    }
    once(type, listener) {
        super.once(type, listener);
    }
    start() {
        if (!this.running) {
            this.running = true;
            __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_pollLivechat).call(this);
            __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_pollMetadata).call(this);
        }
    }
    stop() {
        this.smoothed_queue.clear();
        this.running = false;
    }
    /**
     * Sends a message.
     * @param text - Text to send.
     */
    sendMessage(text) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield __classPrivateFieldGet(this, _LiveChat_actions, "f").execute('/live_chat/send_message', {
                params: Proto.encodeMessageParams(__classPrivateFieldGet(this, _LiveChat_channel_id, "f"), __classPrivateFieldGet(this, _LiveChat_video_id, "f")),
                richMessage: { textSegments: [{ text }] },
                clientMessageId: Platform.shim.uuidv4(),
                client: 'ANDROID',
                parse: true
            });
            if (!response.actions)
                throw new InnertubeError('Unexpected response from send_message', response);
            return response.actions.array().as(AddChatItemAction);
        });
    }
    /**
     * Applies given filter to the live chat.
     * @param filter - Filter to apply.
     */
    applyFilter(filter) {
        var _a, _b, _c, _d, _e, _f, _g;
        if (!this.initial_info)
            throw new InnertubeError('Cannot apply filter before initial info is retrieved.');
        const menu_items = (_c = (_b = (_a = this.initial_info) === null || _a === void 0 ? void 0 : _a.header) === null || _b === void 0 ? void 0 : _b.view_selector) === null || _c === void 0 ? void 0 : _c.sub_menu_items;
        if (filter === 'TOP_CHAT') {
            if ((_d = menu_items === null || menu_items === void 0 ? void 0 : menu_items.at(0)) === null || _d === void 0 ? void 0 : _d.selected)
                return;
            __classPrivateFieldSet(this, _LiveChat_continuation, (_e = menu_items === null || menu_items === void 0 ? void 0 : menu_items.at(0)) === null || _e === void 0 ? void 0 : _e.continuation, "f");
        }
        else {
            if ((_f = menu_items === null || menu_items === void 0 ? void 0 : menu_items.at(1)) === null || _f === void 0 ? void 0 : _f.selected)
                return;
            __classPrivateFieldSet(this, _LiveChat_continuation, (_g = menu_items === null || menu_items === void 0 ? void 0 : menu_items.at(1)) === null || _g === void 0 ? void 0 : _g.continuation, "f");
        }
    }
    /**
     * Retrieves given chat item's menu.
     */
    getItemMenu(item) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!item.hasKey('menu_endpoint') || !item.key('menu_endpoint').isInstanceof(NavigationEndpoint))
                throw new InnertubeError('This item does not have a menu.', item);
            const response = yield item.key('menu_endpoint').instanceof(NavigationEndpoint).call(__classPrivateFieldGet(this, _LiveChat_actions, "f"), { parse: true });
            if (!response)
                throw new InnertubeError('Could not retrieve item menu.', item);
            return new ItemMenu(response, __classPrivateFieldGet(this, _LiveChat_actions, "f"));
        });
    }
    /**
     * Equivalent to "clicking" a button.
     */
    selectButton(button) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield button.endpoint.call(__classPrivateFieldGet(this, _LiveChat_actions, "f"), { parse: true });
            return response;
        });
    }
}
_LiveChat_actions = new WeakMap(), _LiveChat_video_id = new WeakMap(), _LiveChat_channel_id = new WeakMap(), _LiveChat_continuation = new WeakMap(), _LiveChat_mcontinuation = new WeakMap(), _LiveChat_retry_count = new WeakMap(), _LiveChat_instances = new WeakSet(), _LiveChat_pollLivechat = function _LiveChat_pollLivechat() {
    (() => __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        try {
            const response = yield __classPrivateFieldGet(this, _LiveChat_actions, "f").execute(this.is_replay ? 'live_chat/get_live_chat_replay' : 'live_chat/get_live_chat', { continuation: __classPrivateFieldGet(this, _LiveChat_continuation, "f"), parse: true });
            const contents = response.continuation_contents;
            if (!contents) {
                this.emit('error', new InnertubeError('Unexpected live chat incremental continuation response', response));
                this.emit('end');
                this.stop();
            }
            if (!(contents instanceof LiveChatContinuation)) {
                this.stop();
                this.emit('end');
                return;
            }
            __classPrivateFieldSet(this, _LiveChat_continuation, contents.continuation.token, "f");
            // Header only exists in the first request
            if (contents.header) {
                this.initial_info = contents;
                this.emit('start', contents);
                if (this.running)
                    __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_pollLivechat).call(this);
            }
            else {
                this.smoothed_queue.enqueueActionGroup(contents.actions);
            }
            __classPrivateFieldSet(this, _LiveChat_retry_count, 0, "f");
        }
        catch (err) {
            this.emit('error', err);
            if ((__classPrivateFieldSet(this, _LiveChat_retry_count, (_b = __classPrivateFieldGet(this, _LiveChat_retry_count, "f"), _a = _b++, _b), "f"), _a) < 10) {
                yield __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_wait).call(this, 2000);
                __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_pollLivechat).call(this);
            }
            else {
                this.emit('error', new InnertubeError('Reached retry limit for incremental continuation requests', err));
                this.emit('end');
                this.stop();
            }
        }
    }))();
}, _LiveChat_emitSmoothedActions = function _LiveChat_emitSmoothedActions(action_queue) {
    return __awaiter(this, void 0, void 0, function* () {
        const base = 1E4;
        let delay = action_queue.length < base / 80 ? 1 : Math.ceil(action_queue.length / (base / 80));
        const emit_delay_ms = delay == 1 ? (delay = base / action_queue.length,
            delay *= Math.random() + 0.5,
            delay = Math.min(1E3, delay),
            delay = Math.max(80, delay)) : delay = 80;
        for (const action of action_queue) {
            yield __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_wait).call(this, emit_delay_ms);
            this.emit('chat-update', action);
        }
    });
}, _LiveChat_pollMetadata = function _LiveChat_pollMetadata() {
    (() => __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        try {
            const payload = { videoId: __classPrivateFieldGet(this, _LiveChat_video_id, "f") };
            if (__classPrivateFieldGet(this, _LiveChat_mcontinuation, "f")) {
                payload.continuation = __classPrivateFieldGet(this, _LiveChat_mcontinuation, "f");
            }
            const response = yield __classPrivateFieldGet(this, _LiveChat_actions, "f").execute('/updated_metadata', payload);
            const data = Parser.parseResponse(response.data);
            __classPrivateFieldSet(this, _LiveChat_mcontinuation, (_a = data.continuation) === null || _a === void 0 ? void 0 : _a.token, "f");
            this.metadata = {
                title: ((_b = data.actions) === null || _b === void 0 ? void 0 : _b.array().firstOfType(UpdateTitleAction)) || ((_c = this.metadata) === null || _c === void 0 ? void 0 : _c.title),
                description: ((_d = data.actions) === null || _d === void 0 ? void 0 : _d.array().firstOfType(UpdateDescriptionAction)) || ((_e = this.metadata) === null || _e === void 0 ? void 0 : _e.description),
                views: ((_f = data.actions) === null || _f === void 0 ? void 0 : _f.array().firstOfType(UpdateViewershipAction)) || ((_g = this.metadata) === null || _g === void 0 ? void 0 : _g.views),
                likes: ((_h = data.actions) === null || _h === void 0 ? void 0 : _h.array().firstOfType(UpdateToggleButtonTextAction)) || ((_j = this.metadata) === null || _j === void 0 ? void 0 : _j.likes),
                date: ((_k = data.actions) === null || _k === void 0 ? void 0 : _k.array().firstOfType(UpdateDateTextAction)) || ((_l = this.metadata) === null || _l === void 0 ? void 0 : _l.date)
            };
            this.emit('metadata-update', this.metadata);
            yield __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_wait).call(this, 5000);
            if (this.running)
                __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_pollMetadata).call(this);
        }
        catch (err) {
            yield __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_wait).call(this, 2000);
            if (this.running)
                __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_pollMetadata).call(this);
        }
    }))();
}, _LiveChat_wait = function _LiveChat_wait(ms) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => setTimeout(() => resolve(), ms));
    });
};
export default LiveChat;
//# sourceMappingURL=LiveChat.js.map