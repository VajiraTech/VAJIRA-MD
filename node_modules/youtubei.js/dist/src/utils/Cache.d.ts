import { ICache } from '../types/Cache.js';
export default class UniversalCache implements ICache {
    #private;
    constructor(persistent: boolean, persistent_directory?: string);
    get cache_dir(): string;
    get(key: string): Promise<ArrayBuffer | undefined>;
    set(key: string, value: ArrayBuffer): Promise<void>;
    remove(key: string): Promise<void>;
}
