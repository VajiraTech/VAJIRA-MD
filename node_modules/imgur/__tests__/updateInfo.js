const imgur = require('../lib/imgur.js');

describe('updateInfo', () => {
  describe('update image metadata', () => {
    test('should fail when id is not passed', () => {
      const errMsg = 'image id is required';
      expect(imgur.updateInfo()).rejects.toThrowError(errMsg);
    });

    test('should fail when query is passed a boolean', () => {
      const errMsg = 'You did not pass a string as an id.';
      expect(imgur.updateInfo(true)).rejects.toThrowError(errMsg);
    });

    test('should fail when id passed is not a string', () => {
      const errMsg = 'You did not pass a string as an id.';
      expect(imgur.updateInfo(1)).rejects.toThrowError(errMsg);
    });

    test('update one image and receive response', async () => {
      const resp = await imgur.updateInfo(
        'JK9ybyj',
        'new-title',
        'new-description'
      );
      expect(resp).toMatchInlineSnapshot(`true`);
    });
  });

  describe("delegates to _imgurRequest('update', ...)", () => {
    const mockResult = {
      data: [],
      params: {
        id: 'V8svmob',
        title: 'image title',
        message: 'image description',
      },
    };
    const payload = 'V8svmob';
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

    it('should delegate', () => {
      const params = {
        title: 'image title',
        description: 'image description',
      };
      const promise = imgur.updateInfo(
        'V8svmob',
        params.title,
        params.description
      );

      expect(imgur._imgurRequest).toHaveBeenCalledWith(
        'update',
        payload,
        params
      );
      expect(promise).resolves.toMatchObject(mockResult);
    });
  });
});
