const fetch = require("node-fetch");
module.exports = async function (t) {
  if (!t) throw new Error("Term Can't be empty!");
  let e = await fetch(
    "https://wall.alphacoders.com/api2.0/get.php?auth=3e7756c85df54b78f934a284c11abe4e&method=search&term=" +
      encodeURIComponent(t)
  );
  if (!e.ok) throw await e.text();
  let a = (await e.json())["wallpapers"];
  t = a.map((t) => ({
    width: parseInt(t.width),
    height: parseInt(t.height),
    ext: t.file_type,
    id: parseInt(t.id),
    url: t.url_page,
    img: t.url_image,
    thumb: t.url_thumb,
  }));
  return { status: e.status, creator: "Caliph", result: t };
}.bind();
