const _$ = require("cheerio");
const _url = require("url");
const _axios = require("axios");
const _math = require("mathjs");

const GetLink = async (u) => {
  const zippy = await _axios({ method: "GET", url: u });
  const $ = _$.load(zippy.data);
  if (!$("#dlbutton").length) {
    return {
      status: zippy.status,
      error: true,
      message: $("#lrbox>div").first().text().trim(),
    };
  }
  const filename0 = $("title").text();
  const filename = filename0.replace("Zippyshare.com - ", "");
  const url = _url.parse($(".flagen").attr("href"), true);
  const urlori = _url.parse(u);
  const key = url.query["key"];
  let time;
  let dlurl;
  try {
    time = /var b = ([0-9]+);$/gm.exec($("#dlbutton").next().html())[1];
    dlurl =
      urlori.protocol +
      "//" +
      urlori.hostname +
      "/d/" +
      key +
      "/" +
      (2 + 2 * 2 + parseInt(time)) +
      "3" +
      "/" +
      filename;
  } catch (error) {
    time = _math.evaluate(
      / \+ \((.*)\) \+ /gm.exec($("#dlbutton").next().html())[1]
    );
    dlurl =
      urlori.protocol +
      "//" +
      urlori.hostname +
      "/d/" +
      key +
      "/" +
      time +
      "/" +
      filename;
  }
  return { status: zippy.status, error: false, url: dlurl, name: filename };
};

module.exports = GetLink.bind();
