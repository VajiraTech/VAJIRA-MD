const axios = require("axios"),
  cheerio = require("cheerio");
module.exports = async function (e) {
  return (
    (html = await axios.get("https://www.singkatankata.com/search.php?q=" + e)),
    ($ = require("cheerio").load(html.data)),
    (h = []),
    $("h3").each(function (e, t) {
      h.push($(t).text());
    }),
    {
      status: 0 != h.length ? 200 : 404,
      creator: "Caliph",
      link: html.request.res.responseUrl,
      result: h,
    }
  );
}.bind();
