const fetch = require("node-fetch");

async function _075x97(url) {
  result = {};
  if (!url)
    throw {
      creator: "Caliph",
      status: 400,
      message: "Parameter Url Tidak Boleh kosong!",
    };
  cekurl = /^https?:\/\//.test(url);
  if (!cekurl) throw { creator: "Caliph", status: 400, message: "invalid url" };
  hj = await fetch(url);
  Hed = await hj.headers.raw();
  stringify = await JSON.stringify(Hed);
  parse = await JSON.parse(stringify);
  Object.entries(parse).map(([name, value]) => {
    result[name] = value[0];
  });
  return { status: hj.status, creator: "Caliph", result };
}

module.exports = _075x97.bind();
