let axios = require("axios");
let cheerio = require("cheerio");
let fakeUa = require("./fakeua");

module.exports = async function scsearch(query) {
  let base = `https://m.soundcloud.com`;
  let res = await axios.get(`${base}/search?q=${encodeURIComponent(query)}`, {
    headers: { "User-Agent": fakeUa() },
  });
  let $ = cheerio.load(res.data);
  let result = [];
  $("div > ul > li > div").each(function (a, b) {
    let title = $(b).find("a").attr("aria-label").trim();
    let link = base + $(b).find("a").attr("href").trim();
    let thumb = $(b)
      .find("a > div > div > div > picture > img")
      .attr("src")
      .trim();
    let artist = $(b).find("a > div > div > div").eq(1).text();
    let views = $(b).find("a > div > div > div > div > div").eq(0).text();
    let timestamp = $(b).find("a > div > div > div > div > div").eq(1).text();
    let release = $(b).find("a > div > div > div > div > div").eq(2).text();
    result.push({ title, url: link, thumb, artist, views, release, timestamp });
  });
  return { status: res.status, creator: "Caliph", result };
}.bind();
