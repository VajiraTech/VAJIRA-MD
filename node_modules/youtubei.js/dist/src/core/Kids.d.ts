import Search from '../parser/ytkids/Search.js';
import HomeFeed from '../parser/ytkids/HomeFeed.js';
import VideoInfo from '../parser/ytkids/VideoInfo.js';
import Channel from '../parser/ytkids/Channel.js';
import type Session from './Session.js';
declare class Kids {
    #private;
    constructor(session: Session);
    /**
     * Searches the given query.
     * @param query - The query.
     */
    search(query: string): Promise<Search>;
    /**
     * Retrieves video info.
     * @param video_id - The video id.
     */
    getInfo(video_id: string): Promise<VideoInfo>;
    /**
     * Retrieves the contents of the given channel.
    * @param channel_id - The channel id.
     */
    getChannel(channel_id: string): Promise<Channel>;
    /**
     * Retrieves the home feed.
     */
    getHomeFeed(): Promise<HomeFeed>;
}
export default Kids;
