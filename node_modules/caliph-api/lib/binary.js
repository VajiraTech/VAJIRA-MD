/**
 * Binary Encrypt And Decrypt
 * @param {string} text text
 * @return {Promise<string>} Binary Encryptor
 */
function binaryAgent(str) {
  var newBin = str.split(" ");
  var binCode = [];

  for (i = 0; i < newBin.length; i++) {
    binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
  }
  return binCode.join("");
}

function textToBinary(str = "") {
  let res = "";
  res = str
    .split("")
    .map((char) => {
      return char.charCodeAt(0).toString(2);
    })
    .join(" ");
  return res;
}

module.exports = { enc: textToBinary.bind(), dec: binaryAgent.bind() };
