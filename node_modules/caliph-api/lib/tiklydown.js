const axios = require("axios");

module.exports = function tiklydown(url) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://developers.tiklydown.me/api/download?url=${url}`)
      .then(({ data }) => {
        resolve(data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
