const { Resolver } = require("dns");
const resolver = new Resolver();
resolver.setServers(["1.1.1.3", "1.0.0.3"]);

var isNull = function (ip) {
  return ip == "0.0.0.0"
};

var isPorn = function (domain) {
  return new Promise(async (resolve, reject) => {
    resolver.resolve4(domain, (err, res) => {
      if (err) return reject(err);
      resolve({
        creator: "Caliph",
        result: { host: domain, isporn: isNull(res[0]) },
      });
    });
  });
};

module.exports = isPorn.bind();
