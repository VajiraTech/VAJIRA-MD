import type Actions from './Actions.js';
declare class PlaylistManager {
    #private;
    constructor(actions: Actions);
    /**
     * Creates a playlist.
     * @param title - The title of the playlist.
     * @param video_ids - An array of video IDs to add to the playlist.
     */
    create(title: string, video_ids: string[]): Promise<{
        success: boolean;
        status_code: number;
        playlist_id?: string;
        data: any;
    }>;
    /**
     * Deletes a given playlist.
     * @param playlist_id - The playlist ID.
     */
    delete(playlist_id: string): Promise<{
        playlist_id: string;
        success: boolean;
        status_code: number;
        data: any;
    }>;
    /**
     * Adds videos to a given playlist.
     * @param playlist_id - The playlist ID.
     * @param video_ids - An array of video IDs to add to the playlist.
     */
    addVideos(playlist_id: string, video_ids: string[]): Promise<{
        playlist_id: string;
        action_result: any;
    }>;
    /**
     * Removes videos from a given playlist.
     * @param playlist_id - The playlist ID.
     * @param video_ids - An array of video IDs to remove from the playlist.
     */
    removeVideos(playlist_id: string, video_ids: string[]): Promise<{
        playlist_id: string;
        action_result: any;
    }>;
    /**
     * Moves a video to a new position within a given playlist.
     * @param playlist_id - The playlist ID.
     * @param moved_video_id - The video ID to move.
     * @param predecessor_video_id - The video ID to move the moved video before.
     */
    moveVideo(playlist_id: string, moved_video_id: string, predecessor_video_id: string): Promise<{
        playlist_id: string;
        action_result: any;
    }>;
}
export default PlaylistManager;
