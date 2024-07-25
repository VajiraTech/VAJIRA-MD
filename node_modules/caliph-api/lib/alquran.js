/**
 * Al-Qur'an With Translate
 * @param {string} text Surah
 * @return {Promise<string>} Al-Qur'an
 */
const axios = require("axios"),
  cheerio = require("cheerio");
module.exports = async function (a) {
 i = 0;
  try {
    let { data: t } = await axios.get("https://litequran.net/" + a);
    return (
      ($ = require("cheerio").load(t)),
      (json = []),
      $("body > main > article > ol > li").each(function (a, t) {
        (latin = $(t).find("p.translate").text()),
          (arti = $(t).find("p.meaning").text()),
          (bacaan = $(t).find("p.arabic").text()),
          (ayat = (i += 1)),
          json.push({ bacaan: bacaan, latin: latin, arti: arti, ayat: ayat });
      }),
      {
        status: 200,
        surat: $("body > main > article > h1.page-title")
          .text()
          .split(" ").slice(1).join(" "),
        ayat: json.length,
        result: json,
      }
    );
  } catch (a) {
    console.log(a)
    return {
      status: 500,
      message: "Internal Server Error",
      error: a
    };
  }
}.bind();
