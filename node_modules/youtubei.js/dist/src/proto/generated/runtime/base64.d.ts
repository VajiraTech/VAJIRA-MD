/**
 * CREDIT: https://gist.github.com/enepomnyaschih/72c423f727d395eeaa09697058238727
 * Encodes a given Uint8Array, ArrayBuffer or string into RFC4648 base64 representation
 * @param data
 */
export declare function encode(data: ArrayBuffer | string): string;
/**
 * Decodes a given RFC4648 base64 encoded string
 * @param b64
 */
export declare function decode(b64: string): Uint8Array;
