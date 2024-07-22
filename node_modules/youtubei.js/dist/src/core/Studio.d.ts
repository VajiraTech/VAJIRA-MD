import type { ApiResponse } from './Actions.js';
import type Session from './Session.js';
export interface VideoMetadata {
    title?: string;
    description?: string;
    tags?: string[];
    category?: number;
    license?: string;
    age_restricted?: boolean;
    made_for_kids?: boolean;
    privacy?: 'PUBLIC' | 'PRIVATE' | 'UNLISTED';
}
export interface UploadedVideoMetadata {
    title?: string;
    description?: string;
    privacy?: 'PUBLIC' | 'PRIVATE' | 'UNLISTED';
    is_draft?: boolean;
}
declare class Studio {
    #private;
    constructor(session: Session);
    /**
     * Uploads a custom thumbnail and sets it for a video.
     * @example
     * ```ts
     * const buffer = fs.readFileSync('./my_awesome_thumbnail.jpg');
     * const response = await yt.studio.setThumbnail(video_id, buffer);
     * ```
     */
    setThumbnail(video_id: string, buffer: Uint8Array): Promise<ApiResponse>;
    /**
     * Updates given video's metadata.
     * @example
     * ```ts
     * const response = await yt.studio.updateVideoMetadata('videoid', {
     *   tags: [ 'astronomy', 'NASA', 'APOD' ],
     *   title: 'Artemis Mission',
     *   description: 'A nicely written description...',
     *   category: 27,
     *   license: 'creative_commons'
     *   // ...
     * });
     * ```
     */
    updateVideoMetadata(video_id: string, metadata: VideoMetadata): Promise<ApiResponse>;
    /**
     * Uploads a video to YouTube.
     * @example
     * ```ts
     * const file = fs.readFileSync('./my_awesome_video.mp4');
     * const response = await yt.studio.upload(file.buffer, { title: 'Wow!' });
     * ```
     */
    upload(file: BodyInit, metadata?: UploadedVideoMetadata): Promise<ApiResponse>;
}
export default Studio;
