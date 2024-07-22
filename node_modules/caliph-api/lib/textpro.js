const fetch = require("node-fetch"),
  cheerio = require("cheerio"),
  cookie = require("cookie"),
  FormData = require("form-data"),
  uploadFile = require("./tools/uploadFile");
async function post(e, n = {}, t) {
  let c = encodeURIComponent;
  var o = Object.keys(n)
    .map((e) => {
      let t = n[e];
      var o,
        r = Array.isArray(t),
        a = c(e + (r ? "[]" : ""));
      let i = [];
      for (o of (t = r ? t : [t])) i.push(a + "=" + c(o));
      return i.join("&");
    })
    .join("&");
  return fetch(e + "?" + o, {
    method: "GET",
    headers: {
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "GoogleBot",
      Cookie: t,
    },
  });
}
async function textpro(e, t) {
  if (
    (console.log("Scraping textpro.me"),
    !/^https:\/\/textpro\.me\/.+\.html$/.test(e))
  )
    throw new Error("Url Salah!!");
  const o = await fetch(e, {
    method: "GET",
    headers: { "User-Agent": "GoogleBot" },
  });
  var r = await o.text(),
    a = {
      __cfduid: (a = o.headers
        .get("set-cookie")
        .split(",")
        .map((e) => cookie.parse(e))
        .reduce((e, t) => ({ ...e, ...t }), {})).__cfduid,
      PHPSESSID: a.PHPSESSID,
    };
  a = Object.entries(a)
    .map(([e, t]) => cookie.serialize(e, t))
    .join("; ");
  const i = cheerio.load(r);
  var n,
    r = i('input[name="token"]').attr("value");
  const c = new FormData();
  for (n of (t = "string" == typeof t ? [t] : t)) c.append("text[]", n);
  c.append("submit", "Go"),
    c.append("token", r),
    c.append("build_server", "https://textpro.me"),
    c.append("build_server_id", 1);
  const p = await fetch(e, {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "GoogleBot",
      Cookie: a,
      ...c.getHeaders(),
    },
    body: c.getBuffer(),
  });
  (t = await p.text()), (r = /<div.*?id="form_value".+>(.*?)<\/div>/.exec(t));
  if (!r) throw new Error("Token Tidak Ditemukan!!");
  const s = await post(
    "https://textpro.me/effect/create-image",
    JSON.parse(r[1]),
    a
  );
  e = await s.json();
  return (
    console.log("Success Scraping textpro.me"),
    (linkimg = "https://textpro.me" + e.fullsize_image),
    (buffer = await (
      await fetch(linkimg, { headers: { "User-Agent": "GoogleBot" } })
    ).buffer()),
    uploadFile(buffer)
  );
}
module.exports = textpro.bind();
