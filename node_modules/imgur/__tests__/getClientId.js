const imgur = require('../lib/imgur.js');

describe('getClientId()', () => {
  test('should return the default client id, if nothing is set', () => {
    const defaultClientId = 'f0ea04148a54268';
    return expect(imgur.getClientId()).toBe(defaultClientId);
  });

  test('should return the same client that was set', () => {
    const clientId = '123456789abcdef';
    imgur.setClientId(clientId);

    return expect(imgur.getClientId()).toBe(clientId);
  });
});
