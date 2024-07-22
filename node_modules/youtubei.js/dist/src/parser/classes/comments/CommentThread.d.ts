import Comment from './Comment.js';
import CommentReplies from './CommentReplies.js';
import type Actions from '../../../core/Actions.js';
import type { ObservedArray } from '../../helpers.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class CommentThread extends YTNode {
    #private;
    static type: string;
    comment: Comment | null;
    replies?: ObservedArray<Comment>;
    comment_replies_data: CommentReplies | null;
    is_moderated_elq_comment: boolean;
    has_replies: boolean;
    constructor(data: RawNode);
    /**
     * Retrieves replies to this comment thread.
     */
    getReplies(): Promise<CommentThread>;
    /**
     * Retrieves next batch of replies.
     */
    getContinuation(): Promise<CommentThread>;
    get has_continuation(): boolean;
    setActions(actions: Actions): void;
}
export default CommentThread;
