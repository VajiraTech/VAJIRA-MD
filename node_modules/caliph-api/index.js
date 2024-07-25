/**
 * Caliph API
 * Created by @caliphdev
 * @module caliph-api
 */

const { version, author } = require("./package.json");
const binary = require("./lib/binary");
const iplookup = require("./lib/iplook");
const artinama = require("./lib/artinama");
const stress = require("./lib/stress");
const cuaca = require("./lib/cuaca");
const youtube = require("./lib/youtube");
const fakeua = require("./lib/fakeua");
const tiktok2 = require("./lib/tiktok2");
const tiktok = require("./lib/tiktok");
const igstalk = require("./lib/igstalk");
const carigrup = require("./lib/grupwa");
const happymod = require("./lib/happymod");
const kusonime = require("./lib/kusonime");
const emojimix = require("./lib/emojimix");
const translate = require("./lib/translate");
const rangkum = require("./lib/rangkum");
const film = require("./lib/film");
const wallpapercave = require("./lib/wallpapercave");
const family100 = require("./lib/game/family100");
const soundcloud = require("./lib/soundcloud");
const whois = require("./lib/tools/whois");
const getHeaders = require("./lib/tools/headers");
const shortlink = require("./lib/tools/shortlink");
const uploadFile = require("./lib/tools/uploadFile");
const uploadFile2 = require("./lib/tools/uploadFile2");
const minifyjs = require("./lib/tools/minifyjs");
const siapakahaku = require("./lib/game/siapakahaku");
const EncryptHTML = require("./lib/tools/enc-html");
const isporn = require("./lib/tools/is-porn");
const persamaankata = require("./lib/persamaankata");
const singkatankata = require("./lib/singkatankata");
const quran = require("./lib/alquran");
const instagram = require("./lib/instagram");
const freefireid = require("./lib/freefireid");
const wall_alphacoders = require("./lib/wall.alphacoders.js");
const quotesanime = require("./lib/random/quotesanime");
const mediafire = require("./lib/mediafire");
const ttstalk = require("./lib/ttstalk");
const urlexpand = require("./lib/urlexpand");
const zippyshare = require("./lib/zippyshare");
const gempa = require("./lib/infogempa");
const pindl = require("./lib/pindl");
const pin = require("./lib/pinsrch");
const soundcloud2 = require("./lib/soundcloudsearch");
const textpro = require("./lib/textpro");
const sfile = require("./lib/sfile");
const chordlagu = require("./lib/chordlagu");
const subfinder = require("./lib/tools/subfinder");
const tiklydown = require("./lib/tiklydown");

module.exports = {
  version,
  author,
  info: {
    gempa,
  },
  encrypt: {
    binary,
  },
  stress,
  downloader: {
    yt: youtube,
    tiktok,
    tiktok2,
    soundcloud,
    instagram,
    mediafire,
    zippyshare,
    pindl,
    tiklydown,
  },
  search: {
    happymod,
    carigrup,
    kusonime,
    iplookup,
    cuaca,
    artinama,
    igstalk,
    cuaca,
    film,
    wallpapercave,
    singkatankata,
    persamaankata,
    quran,
    freefireid,
    wall_alphacoders,
    ttstalk,
    pin,
    soundcloud: soundcloud2,
    sfile,
    chordlagu,
  },
  random: {
    fakeua,
    quotesanime,
  },
  other: {
    emojimix,
    translate,
    rangkum,
  },
  tools: {
    whois,
    getHeaders,
    shortlink,
    uploadFile,
    uploadFile2,
    minifyjs,
    EncryptHTML,
    expandurl: urlexpand,
    isporn,
    textpro,
    subfinder,
  },
  game: {
    family100,
    siapakahaku,
  },
};
