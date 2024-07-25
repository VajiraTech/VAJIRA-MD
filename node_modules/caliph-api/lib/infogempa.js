const axios = require("axios"),
  Gempa = () =>
    new Promise((e, a) => {
      axios({ url: "https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json" })
        .then(async (a) => {
          var t = {
            tanggal: (result = a.data.Infogempa.gempa).Tanggal,
            jam: result.Jam,
            lintang: result.Lintang,
            bujur: result.Bujur,
            magnitude: result.Magnitude,
            kedalaman: result.Kedalaman,
            potensi: result.Potensi,
            wilayah: result.Wilayah,
            image: "https://data.bmkg.go.id/DataMKG/TEWS/" + result.Shakemap,
          };
          e({ status: a.status, creator: "Caliph", result: t });
        })
        .catch(a);
    });
module.exports = Gempa.bind();
