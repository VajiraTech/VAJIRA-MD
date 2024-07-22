const fetch = require("node-fetch");
const cfg = require("../config");

async function create(url, custom = "") {
  obj = Object.entries({ url, costum: custom });
  conf = await cfg();
  urls = new URLSearchParams(obj);
  let fetched = await fetch(
    "https://" + (conf["host-urlshort"] || "clp.pw") + "/api/v1/create?" + urls
  );
  if (fetched.status !== 200) throw await fetched.json();
  let result = await fetched.json();
  return { status: fetched.status, craator: "Caliph", result: result.response };
}

module.exports = create.bind();
