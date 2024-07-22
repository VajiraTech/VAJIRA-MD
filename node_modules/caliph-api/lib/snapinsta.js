const axios = require("axios");
const https = require("https");
const { getEncodedSnapApp, decodeSnapApp } = require("./utils");

module.exports = async function instagramdl(url) {
  var _a, _b;
  if (!/https?:\/\/www\.instagram\.com\/(reel|tv|p)\//i.test(url)) {
    throw new Error("Invalid url!!");
  }
  const data = (
    await axios("https://165.22.98.17/action.php", {
      data: {
        url: encodeURI(url),
        action: "post",
      },
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        origin: "https://snapinsta.app",
        referer: "https://snapinsta.app/",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
      },
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    })
  ).data;
  const params = getEncodedSnapApp(data);
  if (!Array.isArray(params) || params.length !== 6)
    throw new Error(`Can't parse decode parameters!\n${data}`);
  const decode = decodeSnapApp(...params);
  const html =
    (_b =
      (_a =
        decode === null || decode === void 0
          ? void 0
          : decode.split('("div_download").innerHTML = "')) === null ||
      _a === void 0
        ? void 0
        : _a[1]
            .split(
              '"; parent.document.getElementById("hero-section").remove();'
            )[0]
            .split("</style> <section class=")[1]
            .split('"> ')[1]) === null || _b === void 0
      ? void 0
      : _b.split(" </section> ")[0].replace(/\\(\\)?/g, "");
  const $ = cheerio.load(html);
  const results = [];
  $(".row.download-box > div.col-md-4").each(function () {
    let thumbnail = $(this)
      .find(".download-items__thumb > img[src]")
      .attr("src");
    if (!/https?:\/\//i.test(thumbnail))
      thumbnail = "https://snapinsta.app" + thumbnail;
    let url = $(this).find(".download-items__btn > a[href]").attr("href");
    if (!/https?:\/\//i.test(url || "")) {
      url = encodeURI("https://snapinsta.app" + url);
    }
    if (url) results.push({ thumbnail, url });
  });
  if (!results.length) throw new Error(`Can't get video data!`);
  return results;
};
