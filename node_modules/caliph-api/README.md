# caliph-api
<p align="center">
<a target="_blank" href="https://github.com/caliphdev"><img src="https://avatars.githubusercontent.com/caliphdev?s=400&u=ce99f02d685d58b2bc8b381afa7868481515dbe7&v=4" alt="" width="169" /></a>
</p>
<p align="center">
<a target="_blank" href="https://github.com/caliphdev"><img title="Author" src="https://img.shields.io/badge/Author-Caliphdev-red.svg?style=for-the-badge&logo=github" /></a>
<br>
<a target="_blank" href="//npmjs.com/caliph-api"><img src="https://img.shields.io/npm/dw/caliph-api?color=yellow&label=Downloads&logo=npm&style=flat"></a>
<br>
<a target="_blank" href="https://www.npmjs.com/package/caliph-api?activeTab=versions"><img src="https://img.shields.io/npm/v/caliph-api?color=green&label=version&logo=npm&style=social"></a>
</p>

# Note

ID<br>
Jika Ada Bug,<br>
Silahkan Buat [Issues](https://github.com/caliphdev/caliph-api/issues/new)

EN<br>
If there are bugs,<br>
please create [Issues](https://github.com/caliphdev/caliph-api/issues/new)

# Installation

## Latest

`npm i github:caliphdev/caliph-api`

## Npm

`npm i caliph-api`

# Require

```js
const api = require("caliph-api");
```

# Docs

## Encrypt

```js
// Binary (Encrypt)
const result = api.encrypt.binary.enc("hello world");
console.log(result); // 1101000 1100101 1101100 1101100 1101111 100000 1110111 1101111 1110010 1101100 1100100

// Binary (Decrypt)
const result = api.encrypt.binary.dec("1101000 1100101 1101100 1101100 1101111 100000 1110111 1101111 1110010 1101100 1100100");
console.log(result); // Hello World
```

## Information

```js
// Info Gempa Terbaru
api.info.gempa()
.then(console.log);
```

## Wibu Stress

```js
// Wangy
const result = api.stress.wangy(String);
console.log(result);

// Nenen
const result = api.stress.nenen(String);
console.log(result);

// Simp
const result = api.stress.simp(String);
console.log(result);

// Sherk
const result = api.stress.sherk(String);
console.log(result);
```

## Downloader

```js
// YouTube Music
api.downloader.yt.mp3(url)
.then(console.log);

// Youtube Video
api.downloader.yt.mp4(url)
.then(console.log);

// Youtube Play Music
api.downloader.yt.play(query)
.then(console.log);

// YouTube Play Video
api.downloader.yt.playvid(query)
.then(console.log);

// Tiktok
api.downloader.tiktok(url)
.then(console.log);

// Tiktok 2
api.downloader.tiktok2(url)
.then(console.log);

// SoundCloud
api.downloader.soundcloud(url)
.then(console.log);

// Instagram Downloader 
api.downloader.instagram(URL)
.then(console.log);

// MediaFire
api.downloader.mediafire(URL)
.then(console.log);

// ZippyShare
api.downloader.zippyshare(URL)
.then(console.log);

// Pinterest Downloader
api.downloader.pindl(URL)
.then(console.log)
```

## Search

```js
// Happymod
api.search.happymod(query)
.then(console.log);

// Cari Grup Wa
api.search.carigrup(query)
.then(console.log);

// Kusonime
api.search.kusonime(query)
.then(console.log);

// IP Lookup
api.search.iplookup(domain / ip)
.then(console.log);

// Cuaca
api.search.cuaca(kota / city)
.then(console.log);

// Artinama
api.search.artinama(String)
.then(console.log);

// IG Stalk
api.search.igstalk(user)
.then(console.log);

// Film
api.search.film(query)
.then(console.log);

// Wallpaper Cave
api.search.wallpapercave(query)
.then(console.log);

// Singkatan Kata
api.search.singkatankata(Kata)
.then(console.log);

// Persamaan Kata (Sinomin)
api.search.persamaankata(Kata)
.then(console.log);

// Al Quran
api.search.quran(Surah)
.then(console.log);

// Free Fire ID
api.search.freefireid(ID)
.then(console.log);

// Wall Alphacoders
api.search.wall_alphacoders(Query)
.then(console.log);

// Tiktok Stalk
api.search.ttstalk(username_tiktok)
.then(console.log);

// Pinterest Search 
api.search.pin(Query)
.then(console.log);

// Soundcloud Search
api.search.soundcloud(Query)
.then(console.log)

// Sfile.mobi search
api.search.sfile(Query)
.then(console.log)

// Chord Lagu
api.search.chordlagu(Query)
.then(console.log)
```

## Random

```js
// Fake UserAgent
const result = api.random.fakeua();
console.log(result);

// Quotes Anime
api.random.quotesanime()
.then(console.log);
```

## Other

```js
// Emojimix
api.other.emojimix(Emoji1, Emoji2)
.then(console.log);

// Translate
api.other.translate(String, lang)
.then(console.log); // Lang (Optional, Default: id)

// Rangkum (summarize)
api.other.rangkum(String)
.then(console.log);
```

## Tools

```js
// Subdomain Finder
// lookup all subdomain
api.tools.subfinder(domain)
.then(console.log) // ex: kominfo.co.id

// Whois
api.tools.whois(domain)
.then(console.log);

// getHeaders
api.tools.getHeaders(url)
.then(console.log);

// Shortlink
api.tools.shortlink(url, custom)
.then(console.log); // custom (optional, default: random)

// Upload File
api.tools.uploadFile(Buffer)
.then(console.log); // upload file to https://uploader.caliph.my.id

// Upload File 2
api.tools.uploadFile2(Buffer)
.then(console.log); // upload file to https://www.filezone.cf

// Minifyjs
api.tools.minifyjs(Code_javascript);

// Encrypt HTML
api.tools.EncryptHTML(Code_html);

// Unshort URL
api.tools.expandurl(URL)
.then(console.log);

// Is Porn
api.tools.isporn(domain)
.then(console.log);

// TextPro Maker
api.tools.textpro(URL, [text1, text2])
.then(console.log)
```

## Game

```js
// Family100
api.game.family100()
.then(console.log);

// Siapakah Aku
api.game.siapakahaku()
.then(console.log);
```
