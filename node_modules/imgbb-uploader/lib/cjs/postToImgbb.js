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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postToImgbb = void 0;
var https = __importStar(require("https"));
var querystring = __importStar(require("querystring"));
exports.postToImgbb = function (params) {
    return new Promise(function (resolve, reject) {
        var _a = __assign({}, params), apiKey = _a.apiKey, image = _a.image, _b = _a.name, name = _b === void 0 ? null : _b, _c = _a.expiration, expiration = _c === void 0 ? null : _c;
        var payload = querystring.stringify({
            image: image,
        });
        var query = "/1/upload?key=" + apiKey;
        if (name)
            query += "&name=" + encodeURIComponent(name);
        if (expiration)
            query += "&expiration=" + expiration;
        var options = {
            hostname: "api.imgbb.com",
            method: "POST",
            timeout: 5000,
            path: query,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
                "Content-Length": payload.length,
            },
        };
        var req = https
            .request(options, function (res) {
            var response = "";
            res.on("data", function (d) {
                response += d;
            });
            res.on("end", function () {
                if (JSON.parse(response).error) {
                    var error = {
                        message: "There was a problem with imgBB API",
                        imgbbApiResponse: JSON.parse(response),
                    };
                    reject(new Error(JSON.stringify(error, null, 4)));
                }
                else {
                    var output = JSON.parse(response).data;
                    resolve(output);
                }
            });
        })
            .on("error", function (err) {
            reject(new Error(err));
        });
        req.write(payload);
        return req.end();
    });
};
//# sourceMappingURL=postToImgbb.js.map