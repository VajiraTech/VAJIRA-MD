const fetch = require("node-fetch");

_x5xh = async function () {
  ja = await fetch("https://raw.caliph.my.id/siapakahaku.json");
  if (ja.status !== 200)
    throw { status: ja.status, success: false, message: ja.statusText };
  js = await ja.json();
  random = js[Math.floor(Math.random() * js.length)];
  return { status: ja.status, creator: "Caliph", result: random };
};
module.exports = _x5xh.bind();
