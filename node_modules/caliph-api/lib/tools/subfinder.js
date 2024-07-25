// Created by caliphdev (github.com/caliphdev);
// Please Don't Remove creator!
const dns = require("dns"),
  fetch = require("node-fetch"),
  ipRange = require("ip-range-check"),
  CF_RANGE = [
    "173.245.48.0/20",
    "103.21.244.0/22",
    "103.22.200.0/22",
    "103.31.4.0/22",
    "141.101.64.0/18",
    "108.162.192.0/18",
    "190.93.240.0/20",
    "188.114.96.0/20",
    "197.234.240.0/22",
    "198.41.128.0/17",
    "162.158.0.0/15",
    "104.16.0.0/13",
    "104.24.0.0/14",
    "172.64.0.0/13",
    "131.0.72.0/22",
  ];
module.exports = async ($) => {
  async function _($) {
    console.log("Checking DNS: " + $);
    try {
      let _ = await dns.promises.resolve4($),
        t = ipRange(_[0], CF_RANGE);
      return (
        console.log(`${$}: ${_}`),
        console.log(`CloudFlare Proxy: ${t ? "Yes" : "No"}`),
        console.log(""),
        { domain: $, dns: _, cf_proxy: t }
      );
    } catch (e) {
      return (
        console.log(`DNS Inactive: ${$}`),
        console.log(""),
        { domain: $, dns: null }
      );
    }
  }
  let t = [],
    e = [];
  for (let n of await (
    await fetch(`https://crt.sh/?q=${$}&output=json`)
  ).json())
    n.name_value.split("\n").map(($) => t.push($));
  for (let o of [...new Set(t.filter(($) => !$.startsWith("*")))])
    (respon = await _(o)), e.push(respon);
  return e;
};
