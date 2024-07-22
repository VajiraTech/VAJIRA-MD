const imgur = require('../lib/imgur.js');

describe('setClientId()', () => {
  beforeEach(() => {
    const defaultClientId = '0123456789abcdef';
    imgur.setClientId(defaultClientId);
  });

  test('should return the client id that was set', () => {
    const clientId = 'lolololol';
    imgur.setClientId(clientId);
    return expect(imgur.getClientId()).toBe(clientId);
  });

  test('should not set an empty client id', () => {
    const clientId = '';
    imgur.setClientId(clientId);
    return expect(imgur.getClientId()).not.toBe(clientId);
  });

  test('should not set a number', () => {
    const clientId = 1024;
    imgur.setClientId(clientId);
    return expect(imgur.getClientId()).not.toBe(clientId);
  });

  test('should not set a boolean', () => {
    const clientId = false;
    imgur.setClientId(clientId);
    return expect(imgur.getClientId()).not.toBe(clientId);
  });
});
