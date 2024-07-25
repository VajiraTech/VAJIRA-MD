const fetch = require("node-fetch");

module.exports = async function (url) {
  if (!url) throw new Error("parameter url tidak boleh kosong!!");
  isUrl = /^https?:\/\//.test(url);
  if (!isUrl) throw new Error("Invalid URL");
  var { result } = await (
    await fetch(
      "https://caliph.my.id/api/expandurl.php/?url=" + encodeURIComponent(url)
    )
  ).json();
  return { status: 200, creator: "Caliph", result };
}.bind();
