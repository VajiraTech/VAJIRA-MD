/**
 * Looking for Weather Forecast Information
 * @param {string} text area
 * @return {Promise<string>} Weather Finder
 */
const request = require("node-fetch");
const APIKey = "18d044eb8e1c06eaf7c5a27bb138694c";
const units = "metric";

const Cuaca = (kota) => {
  return new Promise(async (resolve, reject) => {
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${kota}&units=${units}&appid=${APIKey}`;
    let iy = await request(url);
    if (iy.status !== 200)
      return reject({ status: iy.status, data: await iy.text() });
    cuaca = await iy.json();
    result = {
      status: iy.status,
      creator: "Caliph",
      data: {
        Nama: cuaca.name + "," + cuaca.sys.country,
        Longitude: cuaca.coord.lon,
        Latitude: cuaca.coord.lat,
        Suhu: cuaca.main.temp + " C",
        Angin: cuaca.wind.speed + " m/s",
        Kelembaban: cuaca.main.humidity + "%",
        Cuaca: cuaca.weather[0].main,
        Keterangan: cuaca.weather[0].description,
        Udara: cuaca.main.pressure + " HPa",
      },
    };
    resolve(result);
  });
};

module.exports = Cuaca.bind();
