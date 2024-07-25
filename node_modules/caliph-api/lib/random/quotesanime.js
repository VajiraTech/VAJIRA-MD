const fetch = require("node-fetch");

module.exports = async () => {
  let data = await fetch("https://raw.caliph.my.id/quotesanime.json");
  if (data.status != 200)
    return { status: data.status, creator: "Caliph", result: null };
  let json = await data.json();
  let rand = json[Math.floor(Math.random() * json.length)];
  return { status: data.status, creator: "Caliph", result: rand };
};
