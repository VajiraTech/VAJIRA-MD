const fetch = require("node-fetch");

module.exports = async function (usr) {
  if (!usr) throw new Error("parameter username tidak boleh kosong!!!");
  dt = await fetch(
    `https://caliph.my.id/api/tiktokuser.php?usr=${usr.replace(/@/gi, "")}`
  );
  json = await dt.json();
  if (dt.status !== 200) throw new Error(json.message);
  return { status: 200, creator: "Caliph", result: json.result };
}.bind();
