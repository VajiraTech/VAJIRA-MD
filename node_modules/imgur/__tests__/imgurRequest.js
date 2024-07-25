const imgur = require('../lib/imgur.js');

beforeAll(() => imgur.setClientId('abc123'));

test('should reject with invalid operation', () => {
  expect.assertions(1);
  return expect(imgur._imgurRequest()).rejects.toMatchInlineSnapshot(
    `[Error: Invalid operation]`
  );
});

test('should reject with no payload', () => {
  expect.assertions(1);
  return expect(
    imgur._imgurRequest('upload', null)
  ).rejects.toMatchInlineSnapshot(`[Error: No payload specified]`);
});

test('should resolve with no payload when operation is allowlisted', () => {
  expect.assertions(1);
  return expect(imgur._imgurRequest('credits', null)).resolves
    .toMatchInlineSnapshot(`
            Object {
              "ClientLimit": 12500,
              "ClientRemaining": 12500,
              "UserLimit": 500,
              "UserRemaining": 500,
              "UserReset": 1615614380,
            }
          `);
});
