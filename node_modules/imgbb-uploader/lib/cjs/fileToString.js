"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileToString = void 0;
var fs_1 = __importDefault(require("fs"));
/**
 * Promise to turn an image path into a base64 string
 *
 * @param {string} imagePath - Absolute path to your file
 * @returns {string}
 * A string (base64) representation of your image.
 */
exports.fileToString = function (imagePath) {
    return fs_1.default.promises.readFile(imagePath, "base64").catch(function (e) { return e; });
};
//# sourceMappingURL=fileToString.js.map