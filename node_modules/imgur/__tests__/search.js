const imgur = require('../lib/imgur.js');

describe('SEARCH', () => {
  describe('search options validations', () => {
    test('should fail when query is not passed', () => {
      const errMsg =
        'Search requires a query. Try searching with a query (e.g cats).';
      expect(imgur.search()).rejects.toThrowError(errMsg);
    });

    test('should fail when query is passed a boolean', () => {
      const errMsg = 'You did not pass a string as a query.';
      expect(imgur.search(true)).rejects.toThrowError(errMsg);
    });

    test('should fail when query is passed a number', () => {
      const errMsg = 'You did not pass a string as a query.';
      expect(imgur.search(1)).rejects.toThrowError(errMsg);
    });

    test('should fail when query is passed a number', () => {
      const errMsg = 'You did not pass a string as a query.';
      expect(imgur.search(1)).rejects.toThrowError(errMsg);
    });
  });

  describe("delegates to _imgurRequest('search', ...)", () => {
    const mockResult = {
      data: [],
      params: {
        page: '1',
        dateRange: 'month',
        sort: 'viral',
      },
    };
    const payload = '/viral/month/1?q=meme';
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
      const promise = imgur.search('meme', {
        sort: 'viral',
        dateRange: 'month',
        page: '1',
      });

      expect(imgur._imgurRequest).toHaveBeenCalledWith('search', payload);
      expect(promise).resolves.toMatchObject(mockResult);
    });
  });
});
