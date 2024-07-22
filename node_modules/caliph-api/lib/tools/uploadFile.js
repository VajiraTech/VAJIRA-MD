let FormData = require("form-data"),
  type = require("file-type"),
  fetch = require("node-fetch"),
  cryp = require("crypto");
module.exports = async function (e) {
  let { ext: t } = await type.fromBuffer(e);
  bodyForm = new FormData();
  let r = cryp.randomBytes(5).toString("hex");
  bodyForm.append("file", e, r + "." + t);
  let a = await fetch("https://filezone.my.id/upload", {
    method: "post",
    body: bodyForm,
    headers: {
      accept: "*/*",
      "accept-language": "en-US,en;q=0.9,id;q=0.8",
      "content-type": `multipart/form-data; boundary=${bodyForm._boundary}`,
    },
  });
  return {
    status: a.status,
    creator: "Caliph",
    result: (await a.json()).result,
  };
}.bind();
