import type Session from './Session.js';
import type { IBrowseResponse, IGetNotificationsMenuResponse, INextResponse, IPlayerResponse, IResolveURLResponse, ISearchResponse, IUpdatedMetadataResponse, IParsedResponse, IRawResponse } from '../parser/types/index.js';
export interface ApiResponse {
    success: boolean;
    status_code: number;
    data: IRawResponse;
}
export type InnertubeEndpoint = '/player' | '/search' | '/browse' | '/next' | '/updated_metadata' | '/notification/get_notification_menu' | string;
export type ParsedResponse<T> = T extends '/player' ? IPlayerResponse : T extends '/search' ? ISearchResponse : T extends '/browse' ? IBrowseResponse : T extends '/next' ? INextResponse : T extends '/updated_metadata' ? IUpdatedMetadataResponse : T extends '/navigation/resolve_url' ? IResolveURLResponse : T extends '/notification/get_notification_menu' ? IGetNotificationsMenuResponse : IParsedResponse;
declare class Actions {
    #private;
    constructor(session: Session);
    get session(): Session;
    /**
     * Used to retrieve video info.
     * @param id - The video ID.
     * @param cpn - Content Playback Nonce.
     * @param client - The client to use.
     * @param playlist_id - The playlist ID.
     */
    getVideoInfo(id: string, cpn?: string, client?: string, playlist_id?: string): Promise<ApiResponse>;
    /**
     * Makes calls to the playback tracking API.
     * @param url - The URL to call.
     * @param client - The client to use.
     * @param params - Call parameters.
     */
    stats(url: string, client: {
        client_name: string;
        client_version: string;
    }, params: {
        [key: string]: any;
    }): Promise<Response>;
    /**
     * Executes an API call.
     * @param endpoint - The endpoint to call.
     * @param args - Call arguments
     */
    execute<T extends InnertubeEndpoint>(endpoint: T, args: {
        [key: string]: any;
        parse: true;
        protobuf?: false;
        serialized_data?: any;
    }): Promise<ParsedResponse<T>>;
    execute<T extends InnertubeEndpoint>(endpoint: T, args?: {
        [key: string]: any;
        parse?: false;
        protobuf?: true;
        serialized_data?: any;
    }): Promise<ApiResponse>;
}
export default Actions;
