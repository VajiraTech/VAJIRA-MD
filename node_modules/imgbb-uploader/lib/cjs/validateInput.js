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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOptionObject = exports.validateStringInput = void 0;
var fs_1 = __importDefault(require("fs"));
var fileToString_1 = require("./fileToString");
/**
 * Formally validate input 2 strings params
 *
 * @param {string} apiKey - Should be 32-character long string
 * @param {string} path - Should be a valid file path
 *
 * @returns {Promise.<Boolean>}
 *    A promise that resolve to `true` if things are looking good, and to `false` otherwise
 */
var looksLikeApiKey = function (value) {
    return value && value.length === 32 ? true : false;
};
exports.validateStringInput = function (apiKey, path) { return __awaiter(void 0, void 0, void 0, function () {
    var file;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fs_1.default.promises
                    .lstat(path)
                    .then(function (res) { return res.isFile(); })
                    .catch(function () { return false; })];
            case 1:
                file = _a.sent();
                return [2 /*return*/, file && looksLikeApiKey(apiKey) ? true : false];
        }
    });
}); };
/**
 * Formally validate option object. Either return proper string or throws
 *
 * @param {IOptions} options - The options object as described in the docs
 *
 * @returns {Promise.<Boolean>}
 *    A promise that resolve to a valid "image" value if things are looking good, and throws otherwise
 */
exports.validateOptionObject = function (options) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, imagePath, _c, apiKey, _d, 
    // name = null,
    expiration, _e, base64string, _f, imageUrl, oopsie, e_1;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _g.trys.push([0, 7, , 8]);
                _a = __assign({}, options), _b = _a.imagePath, imagePath = _b === void 0 ? null : _b, _c = _a.apiKey, apiKey = _c === void 0 ? null : _c, _d = _a.expiration, expiration = _d === void 0 ? null : _d, _e = _a.base64string, base64string = _e === void 0 ? null : _e, _f = _a.imageUrl, imageUrl = _f === void 0 ? null : _f;
                oopsie = Error("A single input key must be defined between: 'imagePath', 'imageUrl', 'base64string'.");
                if (!looksLikeApiKey(apiKey))
                    throw new Error("'apiKey' looks invalid (should be 32 characters long).");
                if (expiration) {
                    if (typeof expiration !== "number") {
                        throw new Error("'expiration' value must be a number.");
                    }
                    if (Number(expiration) < 60 || Number(expiration) > 15552000) {
                        throw new Error("'expiration' value must be in 60-15552000 range.");
                    }
                }
                if (!imagePath) return [3 /*break*/, 5];
                if (!(base64string || imageUrl)) return [3 /*break*/, 1];
                throw oopsie;
            case 1:
                if (!!exports.validateStringInput(apiKey, imagePath)) return [3 /*break*/, 2];
                throw Error("'imagePath' seem invalid (" + imagePath + ")");
            case 2: return [4 /*yield*/, fileToString_1.fileToString(imagePath)];
            case 3: return [2 /*return*/, _g.sent()];
            case 4: return [3 /*break*/, 6];
            case 5:
                if (base64string) {
                    if (imageUrl)
                        throw oopsie;
                    else
                        return [2 /*return*/, base64string];
                }
                else if (imageUrl) {
                    // todo: some research on imgBB opinions before pasting a regex
                    return [2 /*return*/, imageUrl];
                }
                else
                    throw oopsie;
                _g.label = 6;
            case 6: return [3 /*break*/, 8];
            case 7:
                e_1 = _g.sent();
                throw new Error(String(e_1));
            case 8: return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=validateInput.js.map