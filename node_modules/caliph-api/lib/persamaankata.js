const axios = require("axios"),
  cheerio = require("cheerio");
module.exports = async function (e) {
  return (
    (html = await axios.get("https://m.persamaankata.com/search.php?q=" + e)),
    ($ = require("cheerio").load(html.data)),
    (h = []),
    $("div.word_thesaurus > a").each(function (e, a) {
      h.push($(a).text());
    }),
    (image = $("img#visual_synonym_img").attr("src")),
    {
      status: 0 != h.length ? 200 : 404,
      link: html.request.res.responseUrl,
      image: image,
      result: h,
    }
  );
}.bind();
