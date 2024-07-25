const imgur = require('../lib/imgur.js');

describe('setAPIUrl()', () => {
  beforeEach(() => {
    const defaultImgurAPIUrl = 'https://api.imgur.com/3/';
    imgur.setAPIUrl(defaultImgurAPIUrl);
  });

  test('should return the API Url that was set', () => {
    const imgurAPIUrl = 'https://imgur-apiv3.p.mashape.com/';
    imgur.setAPIUrl(imgurAPIUrl);
    return expect(imgur.getAPIUrl()).toBe(imgurAPIUrl);
  });

  test('should not set an empty API Url', () => {
    const imgurAPIUrl = '';
    imgur.setAPIUrl(imgurAPIUrl);
    return expect(imgur.getAPIUrl()).not.toBe(imgurAPIUrl);
  });

  test('should not set a number', () => {
    const imgurAPIUrl = 1024;
    imgur.setAPIUrl(imgurAPIUrl);
    return expect(imgur.getAPIUrl()).not.toBe(imgurAPIUrl);
  });

  test('should not set a boolean', () => {
    const imgurAPIUrl = false;
    imgur.setAPIUrl(imgurAPIUrl);
    return expect(imgur.getAPIUrl()).not.toBe(imgurAPIUrl);
  });
});
