import { IOptionObject } from "./interfaces";
export declare const validateStringInput: (apiKey: string | null, path: string) => Promise<boolean>;
/**
 * Formally validate option object. Either return proper string or throws
 *
 * @param {IOptions} options - The options object as described in the docs
 *
 * @returns {Promise.<Boolean>}
 *    A promise that resolve to a valid "image" value if things are looking good, and throws otherwise
 */
export declare const validateOptionObject: (options: IOptionObject) => Promise<string | undefined>;
