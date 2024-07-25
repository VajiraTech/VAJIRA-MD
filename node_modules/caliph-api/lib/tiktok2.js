const axios = require("axios");
const cheerio = require("cheerio");

async function shortener(url) {
  return url;
}

module.exports = async function musicaldown(URL) {
  return new Promise((resolve, rejecet) => {
    axios
      .get("https://musicaldown.com/id", {
        headers: {
          "user-agent":
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
        },
      })
      .then((res) => {
        const $ = cheerio.load(res.data);
        const url_name = $("#link_url").attr("name");
        const token_name = $("#submit-form > div")
          .find("div:nth-child(1) > input[type=hidden]:nth-child(2)")
          .attr("name");
        const token_ = $("#submit-form > div")
          .find("div:nth-child(1) > input[type=hidden]:nth-child(2)")
          .attr("value");
        const verify = $("#submit-form > div")
          .find("div:nth-child(1) > input[type=hidden]:nth-child(3)")
          .attr("value");
        let data = {
          [`${url_name}`]: URL,
          [`${token_name}`]: token_,
          verify: verify,
        };
        axios
          .request({
            url: "https://musicaldown.com/id/download",
            method: "post",
            data: new URLSearchParams(Object.entries(data)),
            headers: {
              "user-agent":
                "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
              cookie: res.headers["set-cookie"],
            },
          })
          .then((respon) => {
            const ch = cheerio.load(respon.data);
            axios
              .request({
                url: "https://musicaldown.com/id/mp3",
                method: "post",
                headers: {
                  "user-agent":
                    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
                  cookie: res.headers["set-cookie"],
                },
              })
              .then(async (resaudio) => {
                const hc = cheerio.load(resaudio.data);
                const result = {
                  creator: "Caliph",
                  video_title: (
                    ch(
                      "body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l8 > h2"
                    ).text() || ":No Text"
                  )
                    .split(":")[1]
                    .trim(),
                  audio_title: (
                    hc(
                      "body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l8 > h2"
                    ).text() || ":No Text"
                  )
                    .split(":")[1]
                    .trim(),
                  video: await shortener(
                    ch(
                      "body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l8 > a:nth-child(5)"
                    ).attr("href")
                  ),
                  audio_original: await shortener(
                    hc(
                      "body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l4 > audio > source"
                    ).attr("src")
                  ),
                  nowm: await shortener(
                    ch(
                      "body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l8 > a:nth-child(7)"
                    ).attr("href")
                  ),
                  video_original: await shortener(
                    ch(
                      "body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l8 > a:nth-child(9)"
                    ).attr("href")
                  ),
                  audio: await shortener(
                    hc(
                      "body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l8 > a:nth-child(7)"
                    ).attr("href")
                  ),
                  preview: await shortener(
                    ch(
                      "body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l4 > img"
                    ).attr("src")
                  ),
                };
                resolve(result);
              });
          });
      });
  });
}.bind();
