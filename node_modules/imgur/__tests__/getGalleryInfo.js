const imgur = require('../lib/imgur.js');

beforeAll(() => imgur.setClientId('abc123'));

describe('getGalleryInfo()', () => {
  describe('get gallery info response', () => {
    test('should fail when id is not passed', () => {
      const errMsg = 'Invalid gallery ID';
      expect(imgur.getGalleryInfo()).rejects.toThrowError(errMsg);
    });

    test('gallery info is returned', async () => {
      const resp = await imgur.getGalleryInfo('JK9ybyj');
      expect(resp).toMatchInlineSnapshot(`
        Object {
          "description": "gallery-description",
          "id": "JK9ybyj",
          "title": "gallery-title",
        }
      `);
    });
  });

  describe("delegates to _imgurRequest('gallery', ...)", () => {
    const mockResult = {
      data: [],
      params: {
        id: 'JK9ybyj',
      },
    };
    const payload = 'JK9ybyj';
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
      const promise = imgur.getGalleryInfo('JK9ybyj');

      expect(imgur._imgurRequest).toHaveBeenCalledWith('gallery', payload);
      expect(promise).resolves.toMatchObject(mockResult);
    });
  });
});
