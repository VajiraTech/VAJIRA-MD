const imgur = require('../lib/imgur.js');

afterEach(imgur.clearAllCredentials);

test('returns provided access code in bearer header', async () => {
  const accessToken = 'abc123';
  const imgur = require('../lib/imgur.js');
  imgur.setAccessToken(accessToken);
  const authorizationHeader = await imgur._getAuthorizationHeader();
  expect(authorizationHeader).toBe(`Bearer ${accessToken}`);
});

test('returns provided client id in client id header', async () => {
  const clientId = 'abc123';
  imgur.setClientId(clientId);
  const authorizationHeader = await imgur._getAuthorizationHeader();
  expect(authorizationHeader).toBe(`Client-ID ${clientId}`);
});

test('retrieves access token from imgur via provided username/password/clientid', async () => {
  imgur.setCredentials('fakeusername', 'fakepassword', 'fakeclientd');
  const authorizationHeader = await imgur._getAuthorizationHeader();
  expect(authorizationHeader).toMatchInlineSnapshot(
    `"Bearer 123accesstoken456"`
  );
});
