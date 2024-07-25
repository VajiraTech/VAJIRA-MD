/**
 * Get Username Free Fire From ID
 * @param {string} number IDFF
 * @return {Promise<string>} FF Username Finder
 */
const fetch = require("node-fetch");
module.exports = async function (t) {
  return 0 !==
    (dt = await (
      await fetch(
        "https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store",
        {
          method: "POST",
          body: new URLSearchParams(
            Object.entries({
              catalogId: 66,
              gameId: t,
              itemId: 11,
              paymentId: 750,
              productId: 3,
              product_ref: "AE",
              product_ref_denom: "AE",
            })
          ),
        }
      )
    ).json()).status.code
    ? { status: 400, message: "Invalid ID", result: null }
    : { status: 200, message: "success", result: dt.data.gameDetail.userName };
}.bind();
