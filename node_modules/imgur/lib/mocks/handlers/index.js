const { rest } = require('msw');
const upload = require('./upload');
const authorize = require('./authorize');
const image = require('./image');
const gallery = require('./gallery');
const credits = require('./credits');
const album = require('./album');

const handlers = [
  //upload
  rest.post('https://api.imgur.com/3/upload', upload.postHandler),

  // gallery
  rest.get('https://api.imgur.com/3/gallery/:id', gallery.getHandler),

  // image
  rest.post('https://api.imgur.com/3/image/:id', image.postHandler),
  rest.post(
    'https://api.imgur.com/3/image/:id/favorite',
    image.postFavoriteHandler
  ),
  rest.delete('https://api.imgur.com/3/image/:id', image.deleteHandler),

  // authorize
  rest.get('https://api.imgur.com/oauth2/authorize', authorize.getHandler),
  rest.post('https://api.imgur.com/oauth2/authorize', authorize.postHandler),

  // credits
  rest.get('https://api.imgur.com/3/credits', credits.getHandler),

  // album
  rest.post('https://api.imgur.com/3/album', album.postHandler),
];

module.exports = {
  handlers,
};
