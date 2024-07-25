const imgur = require('../lib/imgur.js');

describe('deleteImage()', () => {
  describe('delete image response', () => {
    test('should fail when id is not passed', () => {
      const errMsg = 'Missing delete hash';
      expect(imgur.deleteImage()).rejects.toThrowError(errMsg);
    });

    test('image is successfully deleted', async () => {
      const resp = await imgur.deleteImage('JK9ybyj');
      expect(resp).toMatchInlineSnapshot(`true`);
    });
  });
});
