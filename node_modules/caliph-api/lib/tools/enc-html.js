function make(e) {
  hexEncoded = "";
  for (var n = 0; n < e.length; n++)
    hexEncoded += "%" + e.charCodeAt(n).toString(16);
  return hexEncoded;
}
module.exports = function (e) {
  return (response = `
<noscript>Please Enable Javascript To View This Page</noscript>
<script>
// Encrypt HTML By https://www.npmjs.com/package/caliph-api
document.write(unescape(${JSON.stringify(make(e))}))
</script>
`.trim());
}.bind();
