import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class Poll extends YTNode {
    static type: string;
    choices: {
        text: Text;
        select_endpoint: NavigationEndpoint | null;
        deselect_endpoint: NavigationEndpoint | null;
        vote_ratio_if_selected: number | null;
        vote_percentage_if_selected: Text;
        vote_ratio_if_not_selected: number | null;
        vote_percentage_if_not_selected: Text;
        image: Thumbnail[] | null;
    }[];
    poll_type?: string;
    total_votes?: Text;
    live_chat_poll_id?: string;
    constructor(data: any);
}
export default Poll;
