"use strict";
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
var index_1 = require("../index");
var sampleResponse_json_1 = __importDefault(require("./sampleResponse.json"));
describe("#getLinkPreview()", function () {
    it("should extract link info from just URL", function () { return __awaiter(void 0, void 0, void 0, function () {
        var linkInfo;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, index_1.getLinkPreview)("https://www.youtube.com/watch?v=wuClZjOdT30", { headers: { "Accept-Language": "en-US" } })];
                case 1:
                    linkInfo = _b.sent();
                    expect(linkInfo.url).toEqual("https://www.youtube.com/watch?v=wuClZjOdT30");
                    expect(linkInfo.siteName).toEqual("YouTube");
                    expect(linkInfo.title).toEqual("Geography Now! Germany");
                    expect(linkInfo.description).toBeTruthy();
                    expect(linkInfo.mediaType).toEqual("video.other");
                    expect(linkInfo.images.length).toEqual(1);
                    expect(linkInfo.images[0]).toEqual("https://i.ytimg.com/vi/wuClZjOdT30/maxresdefault.jpg");
                    expect(linkInfo.videos.length).toEqual(0);
                    expect(linkInfo.favicons[0]).not.toBe("");
                    expect(linkInfo.contentType.toLowerCase()).toEqual("text/html");
                    expect((_a = linkInfo.charset) === null || _a === void 0 ? void 0 : _a.toLowerCase()).toEqual("utf-8");
                    return [2 /*return*/];
            }
        });
    }); });
    it("returns charset of website", function () { return __awaiter(void 0, void 0, void 0, function () {
        var linkInfo;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, index_1.getLinkPreview)("https://www.pravda.com.ua")];
                case 1:
                    linkInfo = _b.sent();
                    expect(linkInfo.url).toEqual("https://www.pravda.com.ua/");
                    expect(linkInfo.contentType.toLowerCase()).toEqual("text/html");
                    expect((_a = linkInfo.charset) === null || _a === void 0 ? void 0 : _a.toLowerCase()).toEqual("windows-1251");
                    return [2 /*return*/];
            }
        });
    }); });
    it("should extract link info from a URL with a newline", function () { return __awaiter(void 0, void 0, void 0, function () {
        var linkInfo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, index_1.getLinkPreview)("\n      https://www.youtube.com/watch?v=wuClZjOdT30\n    ", { headers: { "Accept-Language": "en-US" } })];
                case 1:
                    linkInfo = _a.sent();
                    expect(linkInfo.url).toEqual("https://www.youtube.com/watch?v=wuClZjOdT30");
                    expect(linkInfo.title).toEqual("Geography Now! Germany");
                    expect(linkInfo.siteName).toBeTruthy();
                    expect(linkInfo.description).toBeTruthy();
                    expect(linkInfo.mediaType).toEqual("video.other");
                    expect(linkInfo.images.length).toEqual(1);
                    expect(linkInfo.images[0]).toEqual("https://i.ytimg.com/vi/wuClZjOdT30/maxresdefault.jpg");
                    expect(linkInfo.videos.length).toEqual(0);
                    expect(linkInfo.favicons[0]).not.toBe("");
                    expect(linkInfo.contentType.toLowerCase()).toEqual("text/html");
                    return [2 /*return*/];
            }
        });
    }); });
    it("should extract link info from just text with a URL", function () { return __awaiter(void 0, void 0, void 0, function () {
        var linkInfo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, index_1.getLinkPreview)("This is some text blah blah https://www.youtube.com/watch?v=wuClZjOdT30 and more text", { headers: { "Accept-Language": "en-US" } })];
                case 1:
                    linkInfo = _a.sent();
                    expect(linkInfo.url).toEqual("https://www.youtube.com/watch?v=wuClZjOdT30");
                    expect(linkInfo.title).toEqual("Geography Now! Germany");
                    expect(linkInfo.siteName).toEqual("YouTube");
                    expect(linkInfo.description).toBeTruthy();
                    expect(linkInfo.mediaType).toEqual("video.other");
                    expect(linkInfo.images.length).toEqual(1);
                    expect(linkInfo.images[0]).toEqual("https://i.ytimg.com/vi/wuClZjOdT30/maxresdefault.jpg");
                    expect(linkInfo.videos.length).toEqual(0);
                    expect(linkInfo.favicons[0]).toBeTruthy();
                    expect(linkInfo.contentType.toLowerCase()).toEqual("text/html");
                    return [2 /*return*/];
            }
        });
    }); });
    it("should make request with different languages", function () { return __awaiter(void 0, void 0, void 0, function () {
        var linkInfo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, index_1.getLinkPreview)("https://www.hsbc.ca/", {
                        headers: { "Accept-Language": "fr" },
                        followRedirects: "follow",
                    })];
                case 1:
                    linkInfo = _a.sent();
                    expect(linkInfo.title).toEqual("Particuliers | HSBC Canada");
                    return [4 /*yield*/, (0, index_1.getLinkPreview)("https://www.hsbc.ca/")];
                case 2:
                    linkInfo = _a.sent();
                    expect(linkInfo.title).toEqual("HSBC Personal Banking | HSBC Canada");
                    return [2 /*return*/];
            }
        });
    }); });
    it("should handle audio urls", function () { return __awaiter(void 0, void 0, void 0, function () {
        var linkInfo;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, index_1.getLinkPreview)("https://ondemand.npr.org/anon.npr-mp3/npr/atc/2007/12/20071231_atc_13.mp3")];
                case 1:
                    linkInfo = _b.sent();
                    expect(linkInfo.url).toEqual("https://ondemand.npr.org/anon.npr-mp3/npr/atc/2007/12/20071231_atc_13.mp3");
                    expect(linkInfo.mediaType).toEqual("audio");
                    expect((_a = linkInfo.contentType) === null || _a === void 0 ? void 0 : _a.toLowerCase()).toEqual("audio/mpeg");
                    expect(linkInfo.favicons[0]).toBeTruthy();
                    return [2 /*return*/];
            }
        });
    }); });
    it("should handle video urls", function () { return __awaiter(void 0, void 0, void 0, function () {
        var linkInfo;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, index_1.getLinkPreview)("https://www.w3schools.com/html/mov_bbb.mp4")];
                case 1:
                    linkInfo = _b.sent();
                    expect(linkInfo.url).toEqual("https://www.w3schools.com/html/mov_bbb.mp4");
                    expect(linkInfo.mediaType).toEqual("video");
                    expect((_a = linkInfo.contentType) === null || _a === void 0 ? void 0 : _a.toLowerCase()).toEqual("video/mp4");
                    expect(linkInfo.favicons[0]).toBeTruthy();
                    return [2 /*return*/];
            }
        });
    }); });
    it("should handle image urls", function () { return __awaiter(void 0, void 0, void 0, function () {
        var linkInfo;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, index_1.getLinkPreview)("https://media.npr.org/assets/img/2018/04/27/gettyimages-656523922nunes-4bb9a194ab2986834622983bb2f8fe57728a9e5f-s1100-c15.jpg")];
                case 1:
                    linkInfo = _b.sent();
                    expect(linkInfo.url).toEqual("https://media.npr.org/assets/img/2018/04/27/gettyimages-656523922nunes-4bb9a194ab2986834622983bb2f8fe57728a9e5f-s1100-c15.jpg");
                    expect(linkInfo.mediaType).toEqual("image");
                    expect((_a = linkInfo.contentType) === null || _a === void 0 ? void 0 : _a.toLowerCase()).toEqual("image/jpeg");
                    expect(linkInfo.favicons[0]).toBeTruthy();
                    return [2 /*return*/];
            }
        });
    }); });
    it("should handle unknown content type urls", function () { return __awaiter(void 0, void 0, void 0, function () {
        var linkInfo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, index_1.getLinkPreview)("https://mjml.io/try-it-live")];
                case 1:
                    linkInfo = _a.sent();
                    expect(linkInfo.url).toEqual("https://mjml.io/try-it-live");
                    expect(linkInfo.mediaType).toEqual("website");
                    return [2 /*return*/];
            }
        });
    }); });
    // This site changed? it is not returning application any more but rather website
    it.skip("should handle application urls", function () { return __awaiter(void 0, void 0, void 0, function () {
        var linkInfo;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, index_1.getLinkPreview)("https://assets.curtmfg.com/masterlibrary/56282/installsheet/CME_56282_INS.pdf")];
                case 1:
                    linkInfo = _b.sent();
                    expect(linkInfo.url).toEqual("https://assets.curtmfg.com/masterlibrary/56282/installsheet/CME_56282_INS.pdf");
                    expect(linkInfo.mediaType).toEqual("application");
                    expect((_a = linkInfo.contentType) === null || _a === void 0 ? void 0 : _a.toLowerCase()).toEqual("application/pdf");
                    expect(linkInfo.favicons[0]).toBeTruthy();
                    return [2 /*return*/];
            }
        });
    }); });
    it("no link in text should fail gracefully", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, expect((0, index_1.getLinkPreview)("no link")).rejects.toThrowErrorMatchingSnapshot()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("should handle malformed urls gracefully", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, expect((0, index_1.getLinkPreview)("this is a malformed link: ahttps://www.youtube.com/watch?v=wuClZjOdT30")).rejects.toThrowErrorMatchingSnapshot()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("should handle empty strings gracefully", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, expect((0, index_1.getLinkPreview)("")).rejects.toThrowErrorMatchingSnapshot()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it.skip("should handle a proxy url option", function () { return __awaiter(void 0, void 0, void 0, function () {
        var linkInfo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, index_1.getLinkPreview)("https://www.youtube.com/watch?v=wuClZjOdT30", {
                        proxyUrl: "https://cors-anywhere.herokuapp.com/",
                        headers: {
                            Origin: "http://localhost:8000",
                            "Accept-Language": "en-US",
                        },
                    })];
                case 1:
                    linkInfo = _a.sent();
                    expect(linkInfo.url).toEqual("https://www.youtube.com/watch?v=wuClZjOdT30");
                    expect(linkInfo.siteName).toEqual("YouTube");
                    expect(linkInfo.title).toEqual("Geography Now! Germany");
                    expect(linkInfo.description).toBeTruthy();
                    expect(linkInfo.mediaType).toEqual("video.other");
                    expect(linkInfo.images.length).toEqual(1);
                    expect(linkInfo.images[0]).toEqual("https://i.ytimg.com/vi/wuClZjOdT30/maxresdefault.jpg");
                    expect(linkInfo.videos.length).toEqual(0);
                    expect(linkInfo.favicons[0]).not.toBe("");
                    expect(linkInfo.contentType.toLowerCase()).toEqual("text/html");
                    return [2 /*return*/];
            }
        });
    }); });
    it("should timeout (default 3s) with infinite loading link", function () { return __awaiter(void 0, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, index_1.getLinkPreview)("https://www.gamestop.com/video-games/pc-gaming/components/cooling/products/hyper-212-rgb-black-edition-fan/185243.html?gclid=Cj0KCQjwraqHBhDsARIsAKuGZeECDlqkF2cxpcuS0xRxQmrv5BxFawWS_B51kiqehPf64_KlO0oyunsaAhn5EALw_wcB&gclsrc=aw.ds")];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    expect(e_1.message).toEqual("Request timeout");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    it("should timeout (custom 1s) with infinite loading link", function () { return __awaiter(void 0, void 0, void 0, function () {
        var e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, index_1.getLinkPreview)("https://www.gamestop.com/video-games/pc-gaming/components/cooling/products/hyper-212-rgb-black-edition-fan/185243.html?gclid=Cj0KCQjwraqHBhDsARIsAKuGZeECDlqkF2cxpcuS0xRxQmrv5BxFawWS_B51kiqehPf64_KlO0oyunsaAhn5EALw_wcB&gclsrc=aw.ds", {
                            timeout: 1000,
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    e_2 = _a.sent();
                    expect(e_2.message).toEqual("Request timeout");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    it("should handle followRedirects option is error", function () { return __awaiter(void 0, void 0, void 0, function () {
        var e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, index_1.getLinkPreview)("http://google.com/", { followRedirects: "error" })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    e_3 = _a.sent();
                    expect(e_3.message).toEqual("uri requested responds with a redirect, redirect mode is set to error: http://google.com/");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    it("should handle followRedirects option is manual but handleRedirects was not provided", function () { return __awaiter(void 0, void 0, void 0, function () {
        var e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, index_1.getLinkPreview)("http://google.com/", { followRedirects: "manual" })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    e_4 = _a.sent();
                    expect(e_4.message).toEqual("link-preview-js followRedirects is set to manual, but no handleRedirects function was provided");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    it("should handle followRedirects option is manual with handleRedirects function", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, index_1.getLinkPreview)("http://google.com/", {
                        followRedirects: "manual",
                        handleRedirects: function (baseURL, forwardedURL) {
                            if (forwardedURL !== "http://www.google.com/") {
                                return false;
                            }
                            return true;
                        },
                    })];
                case 1:
                    response = _a.sent();
                    expect(response.contentType).toEqual("text/html");
                    expect(response.url).toEqual("http://www.google.com/");
                    expect(response.mediaType).toEqual("website");
                    return [2 /*return*/];
            }
        });
    }); });
    it("should handle video tags without type or secure_url tags", function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, index_1.getLinkPreview)("https://newpathtitle.com/falling-markets-how-to-stop-buyer-from-getting-out/", { followRedirects: "follow" })];
                case 1:
                    res = _a.sent();
                    expect(res.siteName).toEqual("New Path Title");
                    expect(res.title).toEqual("Falling Markets: How To Stop A Buyer From Getting Out | New Path Title");
                    expect(res.description).toBeTruthy();
                    expect(res.mediaType).toEqual("article");
                    expect(res.images.length).toBeGreaterThan(0);
                    expect(res.videos.length).toBeGreaterThan(0);
                    expect(res.videos[0].url).toEqual("https://www.youtube.com/embed/nqNXjxpAPkU");
                    expect(res.favicons.length).toBeGreaterThan(0);
                    expect(res.contentType.toLowerCase()).toEqual("text/html");
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("#getPreviewFromContent", function () {
    it("Basic parsing", function () { return __awaiter(void 0, void 0, void 0, function () {
        var linkInfo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, index_1.getPreviewFromContent)(sampleResponse_json_1.default)];
                case 1:
                    linkInfo = _a.sent();
                    expect(linkInfo.url).toEqual("https://www.youtube.com/watch?v=wuClZjOdT30");
                    expect(linkInfo.siteName).toEqual("YouTube");
                    expect(linkInfo.title).toEqual("Geography Now! Germany");
                    expect(linkInfo.description).toBeTruthy();
                    expect(linkInfo.mediaType).toEqual("video.other");
                    expect(linkInfo.images.length).toEqual(1);
                    expect(linkInfo.images[0]).toEqual("https://i.ytimg.com/vi/wuClZjOdT30/maxresdefault.jpg");
                    expect(linkInfo.videos.length).toEqual(0);
                    expect(linkInfo.favicons[0]).not.toBe("");
                    expect(linkInfo.contentType.toLowerCase()).toEqual("text/html");
                    return [2 /*return*/];
            }
        });
    }); });
});
xdescribe("simple test", function () {
    it("fetch my repo", function () { return __awaiter(void 0, void 0, void 0, function () {
        var linkInfo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, index_1.getLinkPreview)("https://www.pravda.com.ua")];
                case 1:
                    linkInfo = _a.sent();
                    console.warn({ linkInfo: linkInfo });
                    expect(1).toEqual(2);
                    return [2 /*return*/];
            }
        });
    }); });
});
