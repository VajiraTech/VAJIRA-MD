/**
 * Emojimix Generator
 * @param {string} text emoji1
 * @param {string} text emoji2
 * @return {Promise<string>} Emojimix
 */
let fetch = require("node-fetch");

module.exports = (async (emo1, emo2) => {
  let result = await fetch(
    `https://api-emix.caliph.my.id/api/v1/${encodeURIComponent(
      emo1
    )}/${encodeURIComponent(emo2)}`
  );
  if (result.status != 200) throw await result.json();
  return result.buffer();
}).bind();
