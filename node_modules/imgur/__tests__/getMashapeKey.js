const imgur = require('../lib/imgur.js');

describe('getMashapeKey()', () => {
  test('should return the same client that was set', () => {
    const mashapeKey = '123456789abcdef';
    imgur.setMashapeKey(mashapeKey);

    return expect(imgur.getMashapeKey()).toBe(mashapeKey);
  });
});
