const imgur = require('../lib/imgur.js');

describe('setMashapeKey()', () => {
  beforeEach(() => {
    const defaultMashapeKey = '0123456789abcdef';
    imgur.setMashapeKey(defaultMashapeKey);
  });

  test('should return the Mashape Key that was set', () => {
    const mashapeKey = '0123456789abcdef';
    imgur.setMashapeKey(mashapeKey);
    return expect(imgur.getMashapeKey()).toBe(mashapeKey);
  });

  test('should not set an empty Mashape Key', () => {
    const mashapeKey = '';
    imgur.setMashapeKey(mashapeKey);
    return expect(imgur.getMashapeKey()).not.toBe(mashapeKey);
  });

  test('should not set a number', () => {
    const mashapeKey = 1024;
    imgur.setMashapeKey(mashapeKey);
    return expect(imgur.getMashapeKey()).not.toBe(mashapeKey);
  });

  test('should not set a boolean', () => {
    const mashapeKey = false;
    imgur.setMashapeKey(mashapeKey);
    return expect(imgur.getMashapeKey()).not.toBe(mashapeKey);
  });
});
