cheerio = require("cheerio");
axios = require("axios");
module.exports = async function (url) {
  res = await axios(
    "https://www.expertsphp.com/facebook-video-downloader.php",
    {
      method: "POST",
      data: new URLSearchParams(Object.entries({ url })),
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36",
      },
    }
  );
  $ = cheerio.load(res.data);
  response = {};
  response.status = res.status;
  response.creator = "Caliph";
  response.result =
    $("tbody > tr").eq(0).find("a").attr("href") ||
    $("#showdata > div.col-sm-12 > video > source").attr("src") ||
    $("#showdata > div.col-sm-12 > img").attr("src");
  if (!response.result) throw new Error(`Invalid URL!`);
  return response;
}.bind();
