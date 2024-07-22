# How to Contribute

Thanks for taking the time to contribute!

- [Code of Conduct][code of conduct]

## Testing

We are using the [Jest][jest] framework for testing. Imgur API mocking is configured via [msw][msw]. This makes it simple to mock API responses. Simply add a new handler for an endpoint to `mocks/handlers.js` and that's it. These mocks are automatically configured to work for all new and existing tests.

Here's an example that mocks a response when making a `POST` request to `https://api.imgur.com/3/image`:

```js
const handlers = [
  rest.post('https://api.imgur.com/3/image', (_req, res, ctx) => {
    const response = {
      data: {
        id: 'JK9ybyj',
        deletehash: 'j83zimv4VtDA0Xp',
        link: 'https://i.imgur.com/JK9ybyj.jpg',
      },
      success: true,
      status: 200,
    };
    return res(ctx.json(response));
  }),
];
```

## Submitting Changes

We use [commitizen][commitizen] to enforce [conventional commits][conventional commits]. This enables us to automate both semantic versioning and npm releases.

Install the `commitizen` command line tool:

```bash
npm install -g commitizen
```

Now simply use `git cz` or just `cz` instead of `git commit` when committing.

If you prefer not to install the `commitizen` command globally, alternatively you can use `npm run commit` instead of `git commit`.

## Coding Conventions

- Prettier is ran and applied automatically as part of a precommit hook, so you don't have to worry about semicolons or trailing commas

[jest]: https://jestjs.io/
[msw]: https://mswjs.io/
[commitizen]: https://github.com/commitizen/cz-cli
[conventional commits]: https://www.conventionalcommits.org/
[code of conduct]: CODE_OF_CONDUCT.md
