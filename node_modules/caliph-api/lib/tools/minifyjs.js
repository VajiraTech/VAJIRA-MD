const { minify: minify } = require("uglify-js");
module.exports = function (e) {
  if (!e) throw "Kode Tidak Boleh Kosong";
  let { code: t } = minify(e);
  return t
    ? { status: 200, result: { code: t } }
    : { status: 400, message: "Kode tersebut bukan javascript" };
}.bind();
