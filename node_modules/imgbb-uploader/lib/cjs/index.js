"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var fileToString_1 = require("./fileToString");
var postToImgbb_1 = require("./postToImgbb");
var validateInput_1 = require("./validateInput");
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
var imgbbUploader = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, _c, apiKey, name_1, expiration, image, e_1;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    if (!(args.length === 2)) return [3 /*break*/, 5];
                    return [4 /*yield*/, validateInput_1.validateStringInput(String(args[0]), String(args[1]))];
                case 1:
                    if (!_d.sent()) return [3 /*break*/, 3];
                    _a = postToImgbb_1.postToImgbb;
                    _b = {
                        apiKey: String(args[0])
                    };
                    return [4 /*yield*/, fileToString_1.fileToString(String(args[1]))];
                case 2: return [2 /*return*/, _a.apply(void 0, [(_b.image = _d.sent(),
                            _b)])];
                case 3: throw new Error("Invalid params: please make sure that first argument is an imgBB API key, and second argument is a valid path to image file.");
                case 4: return [3 /*break*/, 11];
                case 5:
                    if (!(args.length === 1 && typeof args[0] === "object")) return [3 /*break*/, 10];
                    _c = __assign({}, args[0]), apiKey = _c.apiKey, name_1 = _c.name, expiration = _c.expiration;
                    _d.label = 6;
                case 6:
                    _d.trys.push([6, 8, , 9]);
                    return [4 /*yield*/, validateInput_1.validateOptionObject(__assign({}, args[0]))];
                case 7:
                    image = _d.sent();
                    return [2 /*return*/, postToImgbb_1.postToImgbb({
                            apiKey: String(apiKey),
                            image: image,
                            name: name_1,
                            expiration: expiration,
                        })];
                case 8:
                    e_1 = _d.sent();
                    throw new Error(String(e_1));
                case 9: return [3 /*break*/, 11];
                case 10: throw new Error("It seems you didn't pass your arguments properly! Please check imgbbUploader documentation here:\nhttps://github.com/TheRealBarenziah/imgbb-uploader/tree/master");
                case 11: return [2 /*return*/];
            }
        });
    });
};
module.exports = imgbbUploader;
//# sourceMappingURL=index.js.map