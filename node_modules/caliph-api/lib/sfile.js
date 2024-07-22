const fetch = require("node-fetch");
const cheerio = require("cheerio");

module.exports = (async (query) => {
  h = await fetch(
    "https://sfile.mobi/search.php?q=" + encodeURIComponent(query)
  );
  $ = cheerio.load(await h.text());
  va = [];
  $("div.list").each(function (u, j) {
    url = $(j).find("a").attr("href");
    filename = $(j).text().trim();
    va.push({ url, filename });
  });
  return { status: 200, creator: "Caliph", result: va.filter((a) => a.url) };
}).bind();
