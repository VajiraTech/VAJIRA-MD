import type Actions from '../../core/Actions.js';
import type { ApiResponse } from '../../core/Actions.js';
import { ObservedArray } from '../helpers.js';
import type { INextResponse } from '../types/ParsedResponse.js';
import CommentsHeader from '../classes/comments/CommentsHeader.js';
import CommentThread from '../classes/comments/CommentThread.js';
declare class Comments {
    #private;
    header?: CommentsHeader;
    contents: ObservedArray<CommentThread>;
    constructor(actions: Actions, data: any, already_parsed?: boolean);
    /**
     * Applies given sort option to the comments.
     * @param sort - Sort type.
     */
    applySort(sort: 'TOP_COMMENTS' | 'NEWEST_FIRST'): Promise<Comments>;
    /**
     * Creates a top-level comment.
     * @param text - Comment text.
     */
    createComment(text: string): Promise<ApiResponse>;
    /**
     * Retrieves next batch of comments.
     */
    getContinuation(): Promise<Comments>;
    get has_continuation(): boolean;
    get page(): INextResponse;
}
export default Comments;
