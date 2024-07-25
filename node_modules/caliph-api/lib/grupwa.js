/**
 * Search Group WhatsApp
 * @param {string} text query
 * @return {Promise<string>} whatsapp group finder
 */
const axios = require("axios");
const cheerio = require("cheerio");

module.exports = ((nama) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        "http://ngarang.com/link-grup-wa/daftar-link-grup-wa.php?search=" +
          nama +
          "&searchby=name"
      )
      .then(({ data }) => {
        const $ = cheerio.load(data);
        const result = [];
        const lnk = [];
        const nm = [];
        $("div.wa-chat-title-container").each(function (a, b) {
          const limk = $(b).find("a").attr("href");
          lnk.push(limk);
        });
        $("div.wa-chat-title-text").each(function (c, d) {
          const name = $(d).text();
          nm.push(name);
        });
        for (let i = 0; i < lnk.length; i++) {
          result.push({
            nama: nm[i].split(". ")[1],
            link: lnk[i].split("?")[0],
          });
        }
        resolve({ status: 200, creator: "Caliph", result });
      })
      .catch(reject);
  });
}).bind();
