/**
 * Search Movie on lk21
 * @param {string} text Title
 * @return {Promise<string>} Search Movie
 */
axios = require("axios");
cheerio = require("cheerio");

h = async function (q) {
  html = await axios.get("https://nonton.lk21official.wiki/?s=" + q);

  $_ = require("cheerio").load(html.data);

  res = [];
  arr = $_("body > main > div > section > div > div > div > div");

  if (arr.text() == void 0 || arr.text() == "" || !arr.text())
    return { status: 404, creator: "Caliph", result: [] };

  arr.each(function (a, b) {
    link = $_(b).find("a").attr("href");
    judul = $_(b).find("a").attr("title");
    thumb = "https:" + $_(b).find("img").attr("src");
    genre = $_(b).find("p.cat-links").text();
    sutradara = $_(b).find("p:nth-child(3)").text().split(":")[1].trim();
    res.push({ judul, link, thumb, genre, sutradara });
  });

  return { status: html.status, creator: "Caliph", result: res };
};

module.exports = h.bind();
