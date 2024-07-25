const imgur = require('../lib/imgur.js');

beforeAll(() => imgur.setClientId('abc123'));

test('upload one image image and receive response', async () => {
  const resp = await imgur.uploadFile('/home/user/meme.jpg');
  expect(resp).toMatchInlineSnapshot(`
    Object {
      "deletehash": "j83zimv4VtDA0Xp",
      "id": "JK9ybyj",
      "link": "https://i.imgur.com/JK9ybyj.jpg",
    }
  `);
});

test('upload multiple images and receive response', async () => {
  const resp = await imgur.uploadFile([
    '/home/user/meme.jpg',
    '/home/user/lol.jpg',
  ]);
  expect(resp).toMatchInlineSnapshot(`
    Array [
      Object {
        "deletehash": "j83zimv4VtDA0Xp",
        "id": "JK9ybyj",
        "link": "https://i.imgur.com/JK9ybyj.jpg",
      },
      Object {
        "deletehash": "j83zimv4VtDA0Xp",
        "id": "JK9ybyj",
        "link": "https://i.imgur.com/JK9ybyj.jpg",
      },
    ]
  `);
});
