const fetch = require("node-fetch"),
  cheerio = require("cheerio"),
  mime = require("mime");
module.exports = async function (t) {
  if (!t) throw new Error("url todak boleh kosong!!");
  if (!/mediafire.com/.test(t)) throw new Error("Invalid URL!!");
  try {
    return (
      (html = await (await fetch(t, { headers: { "User-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1 WhatsApp/2.17.1" }})).text()),
      (result = {}),
      ($ = cheerio.load(html)),
      (result.filename = $("div.dl-btn-label").attr("title")),
      (result.filesize = $("a#downloadButton")
        .text()
        .split("(")[1]
        .split(")")[0]),
      (result.uploadAt = $("ul.details > li:nth-child(2)")
        .text()
        .split(": ")[1]),
      (result.mimetype = mime.lookup($("a#downloadButton").attr("href"))),
      (result.ext = $("a#downloadButton")
        .attr("href")
        .replace(/^.*[\.\/\\]/, "")),
      (result.filetype = $("div.filetype").text()),
      (result.link = $("a#downloadButton").attr("href")),
      { status: 200, creator: "Caliph", result: result }
    );
  } catch {
    return { status: 500, creator: "Caliph", result: {} };
  }
}.bind();
