# pastebin-api

![License](https://img.shields.io/github/license/dev-caspertheghost/pastebin-api)
![Downloads](https://img.shields.io/npm/dw/pastebin-api)

A very simple npm package to interact with the pastebin api.

**Features**

- Create pastes with all the available API data
- Fetch the raw contents of a paste
- Fetch pastes from the authenticated user via a user login
- Delete pastes from the authenticated user via a user login

## Installation

```bash
# npm
npm install pastebin-api

# Yarn
yarn add pastebin-api

# pnpm
pnpm add pastebin-api
```

> **Note** > `pastebin-api` requires node.js version 14 or higher.

## Usage

```js
// src/main.js
import { PasteClient, Publicity, ExpireDate } from "pastebin-api";
// const { PasteClient, Publicity, ExpireDate } = require("pastebin-api"); // using CommonJS

// Tip: load dev key from a `.env` file
const client = new PasteClient("DEV_KEY_HERE");

/* ... */
```

## Documentation

[You can checkout the documentation here](docs/README.md)

## Support

All stars/forks are appreciated! ⚡

Feel free to open a pull request with a new feature.

Made with ❤️ and TypeScript!

## License

[MIT © Dev-CasperTheGhost](./LICENSE)
