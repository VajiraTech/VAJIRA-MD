let cheerio = require("cheerio");
let axios = require("axios");

scdl = async function (url) {
  let res = await axios.get("https://soundcloudmp3.org/id");
  let $ = cheerio.load(res.data);
  let _token = $("form#conversionForm > input[type=hidden]").attr("value");
  tes = await axios("https://soundcloudmp3.org/converter", {
    data: new URLSearchParams(Object.entries({ _token, url })),
    headers: { cookie: res["headers"]["set-cookie"], accept: "UTF-8" },
    method: "post",
  });
  let $$ = cheerio.load(tes.data);
  ress = {};
  ress.thumb = $$("div.info.clearfix > img").attr("src");
  ress.title = $$("div.info.clearfix > p:nth-child(2)")
    .text()
    .replace("Title:", "");
  ress.duration = $$("div.info.clearfix > p:nth-child(3)")
    .text()
    .replace(/Length\:|Minutes/gi, "")
    .trim();
  ress.quality = $$("div.info.clearfix > p:nth-child(4)")
    .text()
    .replace("Quality:", "");
  ress.url = $$("a#download-btn").attr("href");
  if (
    !ress.url &&
    !ress.quality &&
    !ress.duration &&
    !ress.title &&
    !ress.thumb
  )
    throw { status: 400, creator: "Caliph", message: "Link Invalid" };
  return { status: tes.status, creator: "Caliph", result: ress };
};

module.exports = scdl.bind();
