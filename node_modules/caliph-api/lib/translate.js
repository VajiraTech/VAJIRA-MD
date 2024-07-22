const translate = require("@vitalets/google-translate-api");

module.exports = async function (text = null, l = "id") {
  result = {};
  if (!text) throw `String text tidak boleh kosong!`;
  var ress = await translate(text, { to: l });
  result.creator = "Caliph";
  result.result = { text: ress.text, fromlang: ress.from.language.iso };
  return result;
}.bind();
