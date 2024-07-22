import { IOptionObject, IResponseObject } from "./interfaces";
/**
 * Upload local pictures files to imgbb API and get display URLs in response.
 *
 * @param {string} apiKey - Your imgBB API key
 * @param {string} pathToFile - Path to your file
 *
 * @param {Object} options - OPTIONAL: pass Option object as parameter
 * @param {string} options.apiKey - Your imgBB API key
 * @param {string} options.imagePath - Path to your image
 * @param {string} options.name - Custom name for your file
 * @param {string} options.expiration - Expiration value in seconds
 * @param {string} options.base64string - Upload a base64 string (alternative to options.imagePath)
 * @param {string} options.imageUrl - URL of your image (32Mb max)
 *
 * @returns {Promise.<ResponseObject>}
 *    A promise. Access your data using `.then` as shown in [the README](https://github.com/TheRealBarenziah/imgbb-uploader#use) :
 *
 * @example
 *     imgbbUploader("your-api-key", "/absolute/path/to/file.jpg")
 *       .then(res => console.log(res))
 *       .catch(err => console.error(err))
 */
declare const imgbbUploader: (...args: string[] | IOptionObject[]) => Promise<IResponseObject>;
export = imgbbUploader;
