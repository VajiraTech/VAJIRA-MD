/**
 * Get ArtiNama
 * @param {string} text nama
 * @return {Promise<string>} artinama
 */
const axios = require("axios");
const cheerio = require("cheerio");

async function ArtiNama(nama) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://www.primbon.com/arti_nama.php?nama1=${nama}&proses=+Submit%21+`
      )
      .then(({ data }) => {
        const $ = cheerio.load(data);
        const isi = $("#body").text().split("Nama:")[0];
        const res = {
          status: 200,
          creator: "caliph",
          result: isi.trim(),
        };
        resolve(res);
      })
      .catch(reject);
  });
}

module.exports = ArtiNama.bind();
