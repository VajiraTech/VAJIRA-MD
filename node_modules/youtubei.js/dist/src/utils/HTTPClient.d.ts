import Session from '../core/Session.js';
import { FetchFunction } from '../types/PlatformShim.js';
export interface HTTPClientInit {
    baseURL?: string;
}
export default class HTTPClient {
    #private;
    constructor(session: Session, cookie?: string, fetch?: FetchFunction);
    get fetch_function(): FetchFunction;
    fetch(input: URL | Request | string, init?: RequestInit & HTTPClientInit): Promise<Response>;
}
