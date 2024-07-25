# Installation

```sh
npm i mumaker
```

```js
const mumaker = require("mumaker")
```

# Example Maker

## Textpro
```js
// with 1 text
mumaker.textpro("https://textpro.me/create-naruto-logo-style-text-effect-online-1125.html", "Dika Ardnt")
.then(console.log)
.catch(console.error)

// with 2 or more text
mumaker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", ["Dika", "Ardnt."])
.then(console.log)
.catch(console.error)
```

## Ephoto
```js
// with 1 text
mumaker.ephoto("https://ephoto360.com/tao-hieu-ung-chu-phong-cach-dragon-ball-truc-tuyen-1000.html", "Dika Ardnt.")
.then(console.log)
.catch(console.error)

// with 2 or more text
mumaker.ephoto("https://ephoto360.com/tao-hieu-ung-chu-phong-cach-logo-thor-984.html", ["Dika", "Ardnt."])
.then(console.log)
.catch(console.error)
```

## Photooxy
```js
// with 1 text
mumaker.photooxy("https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html", "Dika Ardnt.")
.then(console.log)
.catch(console.error)

// with 2 or more text
mumaker.photooxy("https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html", ["Dika", "Ardnt."])
.then(console.log)
.catch(console.error)
```

### Example Response
```json
{
  status: true,
  image: 'https://textpro.me/images/user_image/2023/07/64c76fb0a62a6.jpg',
  session: 1690791856
}
```

<br>
if the url uses radio then the radio will be made random. if the text is more than 2 use an array
</br>

# Example Downloader

## Tiktok
```js
// support video and slide

mumeker.tiktok("https://www.tiktok.com/@flocki__/video/7158539658333392129")
.then(console.log)
.catch(console.error)
```

### Example Response
```json
{
  thumbnail: "https://tikcdn.io/...",
  author: "orang",
  description: "#anime",
  media: "https" or [], // when slide url response as array
  music: "https://tikcdn.io/...",
  like: "23K",
  comment: "10K",
  share: "12"
}
```

## Instagram
```js
mumaker.instagram("https://www.instagram.com/reel/Cmvj5aWJE56/?utm_source=ig_web_copy_link")
.then(console.log)
.catch(console.error)
```

### Example Response
```json
["https://cdn..."]
```

## Facebook
```js
mumaker.facebook("https://www.facebook.com/watch/?v=2018727118289093")
.then(console.log)
.catch(console.error)
```

### Example Response
```json
{
  description: "...",
  urls: ["https://fbcdn/..."]
}
```