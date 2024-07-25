const axios = require("axios");

module.exports = async function () {
  let { data } = await axios.get("https://caliph-api.js.org/config.json");
  return data;
}.bind();
