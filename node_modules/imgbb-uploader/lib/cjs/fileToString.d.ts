/**
 * Promise to turn an image path into a base64 string
 *
 * @param {string} imagePath - Absolute path to your file
 * @returns {string}
 * A string (base64) representation of your image.
 */
export declare const fileToString: (imagePath: string) => Promise<any>;
