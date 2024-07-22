const os = require("os"),
  log = console.log.bind(console),
  changeCase = require("change-case"),
  htmlEntities = require("html-entities").XmlEntities,
  DELIMITER = ":";
var stripHTMLEntitites = function (e) {
    return new htmlEntities().decode(e);
  },
  getCommonDelimiterForm = function (e, t) {
    var i = new RegExp(t + "\\S+", "g"),
      n = new RegExp(t + " ", "g"),
      r = e.match(i) || [],
      a = e.match(n) || [];
    return r.length > a.length ? t : t + " ";
  },
  parseRawData = function (e) {
    var t = {},
      i = (e = (e = stripHTMLEntitites(e)).replace(/:\s*\r\n/g, ": ")).split(
        "\n"
      ),
      n = getCommonDelimiterForm(e, ":");
    return (
      i.forEach(function (e) {
        if ((e = e.trim()) && e.includes(n)) {
          var i = e.split(":");
          if (i.length >= 2) {
            var r = changeCase.camelCase(i[0]),
              a = i.splice(1).join(":").trim();
            if (r in t) return void (t[r] = `${t[r]} ${a}`);
            t[r] = a;
          }
        }
      }),
      t
    );
  };
module.exports = parseRawData;
