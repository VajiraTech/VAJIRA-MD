const imgur = require('../lib/imgur.js');

beforeAll(() => imgur.setClientId('abc123'));

test('should resolve new album details', () => {
  expect.assertions(1);
  return expect(imgur.createAlbum()).resolves.toMatchInlineSnapshot(`
            Object {
              "deletehash": "KCsF6XvjfqpImI8",
              "id": "ybqNtEF",
            }
          `);
});
