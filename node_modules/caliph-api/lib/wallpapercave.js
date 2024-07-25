const axios = require("axios");
const cheerio = require("cheerio");

module.exports = async function (q) {
  html = await axios.get("https://www.wallpapercave.com/search?q=" + q);

  $ = require("cheerio").load(html.data);

  ar = $("#popular > a > div");
  if (!ar.text()) return { status: 404, creator: "Caliph", result: [] };
  res = [];
  resimg = [];

  ar.each((a, b) => {
    url =
      "https://www.wallpapercave.com" +
      $(b).find("div.albumphoto").attr("href");
    res.push(url);
  });

  random = res[Math.floor(Math.random() * res.length)];

  html2 = await axios.get(random);

  $$ = require("cheerio").load(html2.data);

  ok = $$("body > div#web > div#album > div#albumwp > div.wallpaper");

  ok.each((a, b) => {
    url =
      "https://wallpapercave.com" +
      $$(b).find("a.wpinkw > picture > img.wimg").attr("src");
    resimg.push(url);
  });

  return { status: 200, creator: "Caliph", result: resimg };
}.bind();
