/**
 * Search APKMOD From Happymod
 * @param {string} text area
 * @return {Promise<string>} Happymod Searcher
 */
const cheerio = require("cheerio");
const axios = require("axios");

host = "https://happymod.com";

async function hwhw(q) {
  html = (await axios.get(`${host}/search.html?q=${q}`)).data;
  let $ = cheerio.load(html);
  tez = $(
    "body > div.container-row.clearfix.container-wrap > div.container-left > section > div.pdt-app-box"
  );

  if (!tez.toString()) throw { status: 404, result: [] };
  res = [];

  tez.each(function (g, o) {
    link = host + $(o).find("a").attr("href");
    title = $(o).find("a").attr("title");
    thumb = $(o).find("img").attr("data-original");
    res.push({ title, link, thumb });
  });

  return { status: 200, creator: "Caliph", result: res };
}

module.exports = hwhw.bind();
