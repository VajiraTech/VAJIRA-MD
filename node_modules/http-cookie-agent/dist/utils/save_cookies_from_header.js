"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveCookiesFromHeader = saveCookiesFromHeader;
function saveCookiesFromHeader({
  cookieOptions,
  cookies,
  requestUrl
}) {
  const {
    jar
  } = cookieOptions;
  for (const cookie of [cookies].flat()) {
    if (cookie == null) {
      continue;
    }
    jar.setCookieSync(cookie, requestUrl, {
      ignoreError: true
    });
  }
}