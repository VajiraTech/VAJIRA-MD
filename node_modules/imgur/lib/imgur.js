'use strict';
const imgur = exports;
const got = require('got');
const util = require('util');
const fs = require('fs');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const FormData = require('form-data');
const VERSION = require('../package.json').version;

// The following client ID is tied to the
// registered 'node-imgur' app and is available
// here for public, anonymous usage via this node
// module only.
const defaultClientId = 'f0ea04148a54268';
let imgurClientId = process.env.IMGUR_CLIENT_ID || defaultClientId;
let imgurApiUrl = process.env.IMGUR_API_URL || 'https://api.imgur.com/3/';
let imgurMashapeKey = process.env.IMGUR_MASHAPE_KEY;
let imgurUsername = null;
let imgurPassword = null;
let imgurAccessToken = null;

// An IIFE that returns the OS-specific home directory
// as a location to optionally store the imgur client id
const DEFAULT_CLIENT_ID_PATH = (() => {
  const envHome = process.platform === 'win32' ? 'USERPROFILE' : 'HOME';
  return process.env[envHome] + '/.imgur';
})();

imgur.VERSION = VERSION;

/**
 * Send a request to imgur's public API
 *
 * @param   {string}  operation - operation to perform; 'info' or 'upload'
 * @param   {mixed}   payload - image data
 * @returns {promise}
 */
imgur._imgurRequest = async (operation, payload, extraFormParams) => {
  const form = new FormData();
  const options = {
    url: imgurApiUrl,
    method: null,
    encoding: 'utf8',
  };
  const noPayloadRequired = ['credits', 'search', 'createAlbum'];
  let response = null;

  if (!operation || typeof operation !== 'string') {
    throw new Error('Invalid operation');
  }

  if (!payload) {
    if (!noPayloadRequired.includes(operation)) {
      throw new Error('No payload specified');
    }
  }

  switch (operation) {
    case 'upload':
      options.method = 'POST';
      options.url += 'upload';
      break;
    case 'credits':
      options.method = 'GET';
      options.url += 'credits';
      break;
    case 'info':
      options.method = 'GET';
      options.url += 'image/' + payload;
      break;
    case 'update':
      options.method = 'POST';
      options.url += 'image/' + payload;
      break;
    case 'album':
      options.method = 'GET';
      options.url += 'album/' + payload;
      break;
    case 'createAlbum':
      options.method = 'POST';
      options.url += 'album';
      break;
    case 'delete':
      options.method = 'DELETE';
      options.url += 'image/' + payload;
      break;
    case 'gallery':
      options.method = 'GET';
      options.url += 'gallery/' + payload;
      break;
    case 'search':
      options.method = 'GET';
      options.url += 'gallery/search/' + payload;
      break;
    case 'favorite':
      options.method = 'POST';
      options.url += 'image/' + payload + '/favorite';
      break;
    default:
      throw new Error('Invalid operation');
  }

  const authorizationHeader = await imgur._getAuthorizationHeader();

  if (imgurMashapeKey) {
    options.headers = {
      Authorization: authorizationHeader,
      'X-Mashape-Key': imgurMashapeKey,
    };
  } else {
    options.headers = {
      Authorization: authorizationHeader,
    };
  }

  if (typeof extraFormParams === 'object') {
    if (operation === 'upload') {
      form.append('image', payload);
    }

    for (let param in extraFormParams) {
      form.append(param, extraFormParams[param]);
    }

    options.body = form;
  }

  response = await imgur._request(options);
  const { statusCode: status, statusMessage: message } = response;
  if (status !== 200) {
    throw new Error({
      status,
      message,
    });
  } else {
    return JSON.parse(response.body).data;
  }
};

/**
 * Make a request, abstracting away the underlying logic
 *
 * @param {object} options
 * @returns {promise}
 */
imgur._request = async (options) => await got(options);

/**
 * Get imgur access token using credentials
 *
 * @returns {promise}
 */
imgur._getAuthorizationHeader = async () => {
  if (imgurAccessToken) {
    return `Bearer ${imgurAccessToken}`;
  }

  if (!(imgurUsername && imgurPassword)) {
    return `Client-ID ${imgurClientId}`;
  }

  const options = {
    url: 'https://api.imgur.com/oauth2/authorize',
    method: 'GET',
    encoding: 'utf8',
    searchParams: {
      client_id: imgurClientId,
      response_type: 'token',
    },
  };

  let response;

  response = await imgur._request(options);

  const cookies = Array.isArray(response.headers['set-cookie'])
    ? response.headers['set-cookie'][0]
    : response.headers['set-cookie'];
  const authorize_token = cookies.match('(^|;)[s]*authorize_token=([^;]*)')[2];

  options.method = 'POST';
  options.form = {
    username: imgurUsername,
    password: imgurPassword,
    allow: authorize_token,
  };
  options.followRedirect = false;
  options.headers = {
    cookie: 'authorize_token=' + authorize_token,
  };

  response = await imgur._request(options);
  const location = response.headers.location;
  const token = JSON.parse(
    '{"' +
      decodeURI(location.slice(location.indexOf('#') + 1))
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
  imgurAccessToken = token.access_token;
  return `Bearer ${imgurAccessToken}`;
};

/**
 * Set your Authorization if authenticating separately
 * @link https://api.imgur.com/#register
 * @param {string} accessToken
 */
imgur.setAccessToken = function (accessToken) {
  if (accessToken && typeof accessToken === 'string') {
    imgurAccessToken = accessToken;
  }
};

/**
 * Set your credentials
 * @link https://api.imgur.com/#register
 * @param {string} username
 * @param {string} password
 * @param {string} clientId
 */
imgur.setCredentials = (username, password, clientId) => {
  if (clientId && typeof clientId === 'string') {
    imgurClientId = clientId;
  }
  if (username && typeof username === 'string') {
    imgurUsername = username;
  }
  if (password && typeof password === 'string') {
    imgurPassword = password;
  }
};

/**
 * Attempt to load the client ID from disk
 * @deprecated -- since 1.0.0 -- will be removed in 2.0 along with cli
 * @param   {string}  path - path to file with client id
 * @returns {promise}
 */
imgur.loadClientId = async (path) => {
  path = path || DEFAULT_CLIENT_ID_PATH;

  let data = null;
  try {
    data = await readFile(path, { encoding: 'utf-8' });
  } catch (e) {
    throw new Error(e.message);
  }

  if (!data) {
    throw new Error('File is empty');
  }

  return data;
};

/**
 * Attempt to save the client ID to disk
 * @deprecated -- since 1.0.0 -- will be removed in 2.0 along with cli
 * @param   {string} path - path to save the client id to
 * @returns {promise}
 */
imgur.saveClientId = async (clientId, path) => {
  path = path || DEFAULT_CLIENT_ID_PATH;

  try {
    await writeFile(path, clientId);
  } catch (e) {
    throw new Error(e.message);
  }
};

/**
 * Attempt to remove a saved client ID from disk
 * NOTE: File remains but is emptied
 *
 * @deprecated -- since 1.0.0 -- will be removed in 2.0 along with cli
 * @param   {string} path - path to save the client id to
 * @returns {promise}
 */
imgur.clearClientId = (path) => imgur.saveClientId('', path);

/**
 * Set your client ID
 * @link https://api.imgur.com/#register
 * @param {string} clientId
 */
imgur.setClientId = (clientId) => {
  if (clientId && typeof clientId === 'string') {
    imgurClientId = clientId;
  }
};

/**
 * Get currently set client ID
 * @returns {string} client ID
 */
imgur.getClientId = () => imgurClientId;

/**
 * Set Imgur API URL
 * @link https://api.imgur.com/#register or https://imgur-apiv3.p.mashape.com
 * @param {string} url - URL to make the API calls to imgur
 */
imgur.setAPIUrl = (url) => {
  if (url && typeof url === 'string') {
    imgurApiUrl = url;
  }
};

/**
 * Get Imgur API Url
 * @returns {string} API Url
 */
imgur.getAPIUrl = () => imgurApiUrl;

/**
 * Set Mashape Key
 * @link https://market.mashape.com/imgur/imgur-9
 * @param {string} mashapeKey
 */
imgur.setMashapeKey = (mashapeKey) => {
  if (mashapeKey && typeof mashapeKey === 'string') {
    imgurMashapeKey = mashapeKey;
  }
};

/**
 * Get Mashape Key
 * @returns {string} Mashape Key
 */
imgur.getMashapeKey = () => {
  return imgurMashapeKey;
};

/**
 * Delete image
 * @param {string} deleteHash - deletehash of the image generated during upload
 * @returns {promise}
 */
imgur.deleteImage = async (deleteHash) => {
  if (!deleteHash) {
    throw new Error('Missing delete hash');
  }

  return await imgur._imgurRequest('delete', deleteHash);
};

/**
 * Favorite image
 * @param {string} id - the id of the image to favorite
 * @returns {promise}
 */
imgur.favoriteImage = async (id) => {
  if (!id) {
    throw new Error('Missing image ID');
  }

  return await imgur._imgurRequest('favorite', id);
};

/**
 * Get gallery metadata
 * @param   {string}  id - unique gallery id
 * @returns {promise}
 */
imgur.getGalleryInfo = async (id) => {
  if (!id) {
    throw new Error('Invalid gallery ID');
  }

  return await imgur._imgurRequest('gallery', id);
};

/**
 * Get image metadata
 * @param   {string}  id - unique image id
 * @returns {promise}
 */
imgur.getInfo = async (id) => {
  if (!id) {
    throw new Error('Invalid image ID');
  }

  return await imgur._imgurRequest('info', id);
};

/**
 * Create an album
 * @returns {promise}
 */
imgur.createAlbum = async () => {
  return await imgur._imgurRequest('createAlbum');
};

/**
 * Get album metadata
 * @param   {string}  id - unique album id
 * @returns {promise}
 */
imgur.getAlbumInfo = async (id) => {
  if (!id) {
    throw new Error('Invalid album ID');
  }

  return await imgur._imgurRequest('album', id);
};

/**
 * Update image metadata
 * @param   {string}  id - unique image id
 * @param   {string}  title - the title field
 * @param   {string}  description - the description field
 * @returns {promise}
 */
imgur.updateInfo = async (id, title, description) => {
  const extraFormParams = {};

  if (!id) {
    throw new Error('image id is required');
  } else if (typeof id !== 'string') {
    throw new Error('You did not pass a string as an id.');
  }

  if (typeof title === 'string' && title.length) {
    extraFormParams.title = title;
  }

  if (typeof description === 'string' && description.length) {
    extraFormParams.description = description;
  }

  return await imgur._imgurRequest('update', id, extraFormParams);
};

imgur.search = async (query, options) => {
  const checkQuery = imgur.checkQuery(query);
  let params;
  options = options || {};
  if (checkQuery.constructor === Error) {
    throw new Error(checkQuery);
  } else {
    params = imgur.initSearchParams(query, options);
    const queryStr = params.queryStr;
    delete params.queryStr;

    const json = await imgur._imgurRequest('search', queryStr);
    return { ...json, params };
  }
};

imgur.checkQuery = (query) => {
  let errMsg;
  if (!query) {
    errMsg = new Error(
      'Search requires a query. Try searching with a query (e.g cats).'
    );
  } else if (typeof query != 'string') {
    errMsg = new Error('You did not pass a string as a query.');
  } else {
    errMsg = '';
  }
  return errMsg;
};

imgur.initSearchParams = (query, options) => {
  const params = { sort: 'time', dateRange: 'all', page: '1' };

  for (const key in options) {
    if (key == 'sort' || key == 'dateRange' || key == 'page') {
      params[key] = params[key] != options[key] ? options[key] : params[key];
    }
  }

  let queryStr = '';
  Object.keys(params).forEach((param) => {
    queryStr += '/' + params[param];
  });
  queryStr += '?q=' + query;
  params['queryStr'] = queryStr;
  return params;
};

/**
 * Upload an image file or multiple image files concurrently
 * @param   {string|[]string}  path - path to a binary image file
 * @param   {string=} albumId - the album id to upload to
 * @param   {string=} title - the title of the image
 * @param   {string=} description - the description of the image
 * @returns {promise}
 */
imgur.uploadFile = async (path, albumId, title, description) => {
  const extraFormParams = {};

  if (!path) {
    throw new Error('No file(s) to upload');
  }

  if (typeof albumId === 'string' && albumId.length) {
    extraFormParams.album = albumId;
  }

  if (typeof title === 'string' && title.length) {
    extraFormParams.title = title;
  }

  if (typeof description === 'string' && description.length) {
    extraFormParams.description = description;
  }

  if (Array.isArray(path)) {
    const promises = path.map((f) =>
      imgur._imgurRequest('upload', fs.createReadStream(f), extraFormParams)
    );

    return await Promise.all(promises);
  } else {
    return await imgur._imgurRequest(
      'upload',
      fs.createReadStream(path),
      extraFormParams
    );
  }
};

/**
 * Upload a url
 * @param   {string}  url - address to an image on the web
 * @param   {string=} albumId - the album id to upload to
 * @param   {string=} title - the title of the image
 * @param   {string=} description - the description of the image
 * @returns {promise}
 */
imgur.uploadUrl = async (url, albumId, title, description) => {
  const extraFormParams = { type: 'url' };

  if (typeof url === 'object') {
    extraFormParams.title = url.title;
    extraFormParams.description = url.description;
    extraFormParams.album = url.albumId;
    url = url.url;
  }

  if (typeof albumId === 'string' && albumId.length) {
    extraFormParams.album = albumId;
  }

  if (typeof title === 'string' && title.length) {
    extraFormParams.title = title;
  }

  if (typeof description === 'string' && description.length) {
    extraFormParams.description = description;
  }

  if (!url) {
    throw new Error('Invalid URL');
  }

  try {
    new URL(url);
  } catch (e) {
    throw new Error('Invalid URL');
  }

  return await imgur._imgurRequest('upload', url, extraFormParams);
};

/**
 * Upload a Base64-encoded string
 * @link http://en.wikipedia.org/wiki/Base64
 * @param   {string} base64 - a base-64 encoded string
 * @param   {string=} albumId - the album id to upload to
 * @param   {string=} title - the title of the image
 * @param   {string=} description - the description of the image
 * @returns {promise} - on resolve, returns the resulting image object from imgur
 */
imgur.uploadBase64 = async (base64, albumId, title, description) => {
  const extraFormParams = { type: 'base64' };

  if (typeof albumId === 'string' && albumId.length) {
    extraFormParams.album = albumId;
  }

  if (typeof title === 'string' && title.length) {
    extraFormParams.title = title;
  }

  if (typeof description === 'string' && description.length) {
    extraFormParams.description = description;
  }

  if (typeof base64 !== 'string' || !base64 || !base64.length) {
    throw new Error('Invalid Base64 input');
  }

  return await imgur._imgurRequest('upload', base64, extraFormParams);
};

/**
 * Upload an entire album of images
 * @deprecated -- since 1.0.0 -- instead use imgur.createAlbum().then({ id } => imgur.uploadFile([...], id, ...))
 * @param   {Array} images - array of image strings of desired type
 * @param   {string} uploadType - the type of the upload ('File', 'Url', 'Base64')
 * @param   {boolean=} failSafe - if true, it won't fail on invalid or empty image input and will return an object with empty album data and an empty image array
 * @returns {promise} - on resolve, returns an object with the album data and and an array of image data objects {data: {...}, images: [{...}, ...]}
 */
imgur.uploadAlbum = async (images, uploadType, failSafe) => {
  if (
    !images ||
    !images.length ||
    !(typeof images === 'string' || images instanceof Array)
  ) {
    if (failSafe) {
      return { data: {}, images: [] };
    } else {
      throw new Error('Invalid image input, only arrays supported');
    }
  }

  const album = await imgur.createAlbum();
  const imageArr = await imgur.uploadImages(images, uploadType, album.id);
  return { data: album, images: imageArr };
};

/**
 * Upload an entire album of images
 * @deprecated -- since 1.0.0 -- use uploadFiles([...]) for files. array support to be added to uploadUrl and uploadBase64
 * @param {Array} images  - array of image strings of desired type
 * @param {string} uploadType - the type of the upload ('File', 'Url', 'Base64')
 * @param {string=} albumId - the album id to upload to
 * @returns {promise} - on resolve, returns an array of image data objects {album: {...}, images: [{...}, ...]}
 */
imgur.uploadImages = async (images, uploadType, albumId) => {
  const upload = imgur['upload' + uploadType];

  if (
    !images ||
    !images.length ||
    !(typeof images === 'string' || images instanceof Array)
  ) {
    throw new Error('Invalid image input, only arrays supported');
  }

  const promises = images.map((img) => upload(img, albumId));
  return await Promise.all(promises);
};

/**
 * Get current credit limits
 * @returns {promise}
 */
imgur.getCredits = async () => {
  return await imgur._imgurRequest('credits');
};

imgur.clearAllCredentials = () => {
  imgurAccessToken = null;
  imgurUsername = null;
  imgurPassword = null;
  imgurClientId = defaultClientId;
};
