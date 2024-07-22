const imgur = require('../lib/imgur.js');

describe('uploadBase64()', () => {
  describe('validation', () => {
    test('should fail with input', () => {
      const errMsg = 'Invalid Base64 input';

      expect(imgur.uploadBase64()).rejects.toThrowError(errMsg);
    });
  });

  describe("delegates to _imgurRequest('upload', ...)", () => {
    const mockResult = { foo: 'bar' };
    const testImage =
      'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';

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
      const promise = imgur.uploadBase64(testImage);

      expect(imgur._imgurRequest).toHaveBeenCalledWith('upload', testImage, {
        type: 'base64',
      });
      expect(promise).resolves.toEqual(mockResult);
    });

    test('should propagate albumId', () => {
      const albumId = '123';
      const promise = imgur.uploadBase64(testImage, albumId);

      expect(imgur._imgurRequest).toHaveBeenCalledWith('upload', testImage, {
        album: albumId,
        type: 'base64',
      });
      expect(promise).resolves.toEqual(mockResult);
    });
  });
});
