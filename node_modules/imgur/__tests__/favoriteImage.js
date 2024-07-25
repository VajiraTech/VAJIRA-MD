const imgur = require('../lib/imgur.js');

describe('favoriteImage()', () => {
  describe('favorite image response', () => {
    test('should fail with no input', () => {
      const errMsg = 'Missing image ID';

      expect(imgur.favoriteImage()).rejects.toThrowError(errMsg);
    });

    test('should return successful favorite image response', async () => {
      const resp = await imgur.favoriteImage('lDrXtHj');
      expect(resp).toMatchInlineSnapshot(`"favorited"`);
    });
  });
});
