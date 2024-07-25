const imgur = require('../lib/imgur.js');

describe('uploadUrl()', () => {
  describe('validation', () => {
    test('should fail with no url', () => {
      const errMsg = 'Invalid URL';

      expect(imgur.uploadUrl()).rejects.toThrowError(errMsg);
    });

    test('should fail with on a malformed url', () => {
      const errMsg = 'Invalid URL';

      expect(imgur.uploadUrl('blarg')).rejects.toThrowError(errMsg);
    });
  });

  describe("delegates to _imgurRequest('upload', ...)", () => {
    const mockResult = { foo: 'bar' };
    const testUrl = 'https://somewhere/test.png';

    const _imgurRequestBackup = imgur._imgurRequest;

    beforeEach(() => {
      imgur._imgurRequest = jest
        .fn()
        .mockImplementation(() => Promise.resolve(mockResult));
    });

    afterEach(() => {
      imgur._imgurRequest.mockClear();
      imgur._imgurRequest = _imgurRequestBackup;
    });

    test('should delegate', () => {
      const promise = imgur.uploadUrl(testUrl);

      expect(imgur._imgurRequest).toHaveBeenCalledWith('upload', testUrl, {
        type: 'url',
      });
      expect(promise).resolves.toEqual(mockResult);
    });

    test('should propagate albumId', () => {
      const albumId = '123';
      const promise = imgur.uploadUrl(testUrl, albumId);

      expect(imgur._imgurRequest).toHaveBeenCalledWith('upload', testUrl, {
        album: albumId,
        type: 'url',
      });
      expect(promise).resolves.toEqual(mockResult);
    });
  });
});
