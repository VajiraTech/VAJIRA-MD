"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MixedCookieAgent = void 0;
var _agentBase = require("agent-base");
var _http_cookie_agent = require("./http_cookie_agent");
var _https_cookie_agent = require("./https_cookie_agent");
class MixedCookieAgent extends _agentBase.Agent {
  constructor(options) {
    super();
    this._httpAgent = new _http_cookie_agent.HttpCookieAgent(options);
    this._httpsAgent = new _https_cookie_agent.HttpsCookieAgent(options);
  }
  connect(_req, options) {
    return options.secureEndpoint ? this._httpsAgent : this._httpAgent;
  }
}
exports.MixedCookieAgent = MixedCookieAgent;