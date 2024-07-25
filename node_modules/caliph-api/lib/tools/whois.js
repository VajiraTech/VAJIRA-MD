const whois = require("whois");
const util = require("util");
const parseraw = require("../parse-raw-data");
const promis = util.promisify(whois.lookup);

async function lookup(domain) {
  json = await promis(domain);
  result = await parseraw(json);
  if (result.nameServer) {
    result.nameServers = result.nameServer.split(" ");
    delete result.nameServer;
  }
  return { status: 200, creator: "Caliph", result };
}

module.exports = lookup.bind();
