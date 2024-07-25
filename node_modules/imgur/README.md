# 🚨 v2 development is in progress within the [`next`](https://github.com/kaimallea/node-imgur/tree/next) branch. [See v2 README](https://github.com/kaimallea/node-imgur/blob/next/README.md).

## ⚠️ v1.x is now in maintenance / support mode. No new features will be added.

## Command-line Usage

### Installation

```bash
npm install imgur -g
```

### Usage

Pass binary image files, urls, and/or [base64-encoded](http://en.wikipedia.org/wiki/Base64) image strings as arguments. Globbing is supported.

Upload a single image:

```bash
imgur cat.png
```

Upload multiple images ([globbing](<http://en.wikipedia.org/wiki/Glob_(programming)>) supported):

```bash
imgur cat.png cats.gif cats23.jpg

imgur ~/*.(jpg|png|gif)

imgur ~/Pictures/kittens/*.jpg ~/gifs/sfw/*.gif
```

Upload an image from another place on the web. Be sure to include http(s):

```bash
imgur --url https://octodex.github.com/images/topguntocat.png
```

Upload a Base-64 encoded image:

```bash
imgur --base64 iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmUlEQVQ4je2TsQ3CMBBFnxMa08WR2IQKJskIUNwMZAcYwWIQMs65JCUpEEIYW4pJy6v+6e6+/hVnnGsAzsCBMi7AsbbW/rIMsAU2xrnmkeruuzW7zgIw+JGbv6fGQpWzfy3HOsJlDQY/AlCv3jpF9oS5ZBOICKoB1YCIlCdQDR9127qyBHP5Gyw3CBXPr/qi709JHXE1S995AsqoJu8x78GsAAAAAElFTkSuQmCC
```

Saving a client id for subsequent use:

```bash
imgur --save f9ae01148b53261
```

Display saved client id:

```bash
imgur --show
```

Remove previously saved client id:

```bash
imgur --clear
```

Use a specific client id one time only (overrides saved id):

```bash
imgur --client-id f9ae01148b53261 --file ~/me.jpg

# Short-hand
imgur -c f9ae01148b53261 -f ~/me.jpg
```

Add images to an existing album by specifying an album ID:

```bash
imgur --album-id F8KTV --file ~/me.jpg

# Short-hand
imgur -a F8KTV ~/me.jpg
```

You must own the album. If it's an anonymous album you need to use the `deletehash` in place of the album ID.

## Module Usage

### Installation

```bash
npm install imgur
```

### Usage

#### Requiring the module:

```javascript
const imgur = require('imgur');
```

#### Dealing with client IDs:

```javascript
// Change this cliend id to your own.
const clientId = 'aCs53GSs4tga0ikp';

// Setting
imgur.setClientId(clientId);

// Getting
imgur.getClientId();

// You can specify path or keep it null. Defaults to ~/.imgur
const path = null;

// Saving to disk. Returns a promise.
imgur
  .saveClientId(clientId, path)
  .then(() => {
    console.log('Saved.');
  })
  .catch((err) => {
    console.log(err.message);
  });

// Loading from disk
imgur.loadClientId(path).then(imgur.setClientId);
```

#### Dealing with API URL:

In order to change the API Url say Mashape URL, use setAPIUrl(MashapeURL)

```javascript
//Setting
imgur.setAPIUrl('https://api.imgur.com/3/');

//If setAPIUrl() is not called, API URL is read from process.env.IMGUR_API_URL

//Getting
imgur.getAPIUrl();
```

#### Dealing with Mashape Key

Requests to the Mashape URL expects a X-Mashape-Key: MashapeKey header.
Set Mashape Key by using setMashapeKey(MashapeKey) method.
Note: Defaults to process.env.IMGUR_MASHAPE_KEY

```javascript
//Setting
imgur.setMashapeKey(https://imgur-apiv3.p.mashape.com/);

//Getting
imgur.getMashapeKey()
```

#### Dealing with credentials:

For when you want to upload images to an account.

```javascript
// Setting
imgur.setCredentials('email@domain.com', 'password', 'aCs53GSs4tga0ikp');
```

#### Uploading files; globbing supported:

```javascript
// A single image
imgur
  .uploadFile('/home/kai/kittens.png')
  .then((json) => {
    console.log(json.link);
  })
  .catch((err) => {
    console.error(err.message);
  });

// All jpegs in a specific folder
// to an album you own
const albumId = 'F8KTV';
imgur
  .uploadFile('/home/kai/*.jpg', albumId)
  .then((json) => {
    console.log(json.link);
  })
  .catch((err) => {
    console.error(err.message);
  });

// Multiple image types from home folder
imgur
  .uploadFile('~/*.(jpg|png|gif)')
  .then((json) => {
    console.log(json.link);
  })
  .catch((err) => {
    console.error(err.message);
  });
```

#### Searching images within the gallery:

The first argument should be a query to search and it's the only required option. The second argument is optional params to sort your query by.

- `sort` - Accepts 'time', 'viral', or 'top' as a value. Defaults to top.
- `dateRange` - Accepts 'day', 'week', 'month', 'year', or 'all' as a value. Defaults to all.
- `page` - Accepts an integer (e.g. 1, 2, 3, 4) as a value. Defaults to 1.

Search returns an object with the query response as an array of objects that include an image's ID, title, description, views, etc.. and the params you sent with the request.

```javascript
const query = 'cats';
const optionalParams = { sort: 'top', dateRange: 'week', page: 1 };
imgur
  .search(query, optionalParams)
  .then((json) => {
    console.log(json);
  })
  .catch((err) => {
    console.error(err);
  });
```

#### Fetching image data:

```javascript
const kittenPic = 'mbgq7nd';
imgur
  .getInfo(kittenPic)
  .then((json) => {
    console.log(json);
  })
  .catch((err) => {
    console.error(err.message);
  });
```

#### Fetching album data:

```javascript
const kittenAlbum = 'mbgq7nd';
imgur
  .getAlbumInfo(kittenAlbum)
  .then((json) => {
    console.log(json);
  })
  .catch((err) => {
    console.error(err.message);
  });
```

#### Creating an album:

```javascript
imgur
  .createAlbum()
  .then((json) => {
    console.log(json);
  })
  .catch((err) => {
    console.error(err.message);
  });
```

#### Uploading URLs of images hosted elsewhere:

```javascript
// Include http(s) when specifying URLs
imgur
  .uploadUrl('https://octodex.github.com/images/topguntocat.png')
  .then((json) => {
    console.log(json.link);
  })
  .catch((err) => {
    console.error(err.message);
  });
```

#### Uploading Base-64 encoded images:

```javascript
const imgurFavicon =
  'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmUlEQVQ4je2TsQ3CMBBFnxMa08WR2IQKJskIUNwMZAcYwWIQMs65JCUpEEIYW4pJy6v+6e6+/hVnnGsAzsCBMi7AsbbW/rIMsAU2xrnmkeruuzW7zgIw+JGbv6fGQpWzfy3HOsJlDQY/AlCv3jpF9oS5ZBOICKoB1YCIlCdQDR9127qyBHP5Gyw3CBXPr/qi709JHXE1S995AsqoJu8x78GsAAAAAElFTkSuQmCC';

imgur
  .uploadBase64(imgurFavicon)
  .then((json) => {
    console.log(json.link);
  })
  .catch((err) => {
    console.error(err.message);
  });
```

#### Uploading multiple images:

Upload an array of images of the desired upload type ('File', 'Url', 'Base64').

Returns an array of images (imgur image data).

```javascript
imgur
  .uploadImages(images, uploadType /*, albumId */)
  .then((images) => {
    console.log(images);
  })
  .catch((err) => {
    console.error(err.message);
  });
```

#### Uploading an album:

Create a new album and upload an array of images of the desired upload type to it ('File', 'Url', 'Base64').

Returns an object with the album data and an array of images { data: {...}, images: [{...}, ...]}.

The third parameter is an optional fail safe, meaning if the array of images is empty or invalid, it will not fail, but returns an object with empty data and empty images.

```javascript
imgur
  .uploadAlbum(images, uploadType /*, failSafe */)
  .then((album) => {
    console.log(album.data, album.images);
  })
  .catch((err) => {
    console.error(err.message);
  });
```

#### Deleting anonymous uploads

Delete an image based on the deletehash(generated during the image upload)

```javascript
imgur
  .deleteImage(deletehash)
  .then((status) => {
    console.log(status);
  })
  .catch((err) => {
    console.error(err.message);
  });
```

## License

#### MIT
