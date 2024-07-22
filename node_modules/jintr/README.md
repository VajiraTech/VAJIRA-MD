[actions]: https://github.com/LuanRT/Jinter/actions

<h1 align=center>Jinter</h1>

<p align=center>A tiny JavaScript interpreter written in TypeScript

<div align="center">

  [![Tests](https://github.com/LuanRT/Jinter/actions/workflows/test.yml/badge.svg?branch=main)][actions]


</div>

> **Note**: This project was originally developed for use in [YouTube.js](https://github.com/LuanRT/YouTube.js).

## Table of Contents <!-- omit in toc -->

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
  - [`interpret()`](#interpret)
  - [`visitor`](#visitor)
  - [`scope`](#scope)
- [License](#license)

## Installation
```sh
npm install jintr
```

## Usage

Execute some JavaScript code:
```ts
// const Jinter = require('jintr').default;
import { Jinter } from 'jintr';

const code = `
  function sayHiTo(person) {
    console.log('Hi ' + person + '!');
  }
  
  sayHiTo('mom');
`

const jinter = new Jinter(code);
jinter.interpret();
```
---
Inject your own functions and variables into the interpreter:
```ts
// ...

jinter.visitor.on('println', (node, visitor) => {
  if (node.type === 'CallExpression' && node.callee.type === 'MemberExpression') {
    const args = node.arguments.map((arg) => visitor.visitNode(arg));
    return console.log(...args);
  }
});

// Ex: str.toArray();
jinter.visitor.on('toArray', (node, visitor) => {
  if (node.type === 'CallExpression' && node.callee.type === 'MemberExpression') {
    const obj = visitor.visitNode(node.callee.object);
    return obj.split('');    
  }  
});

// Or you can just intercept access to specific nodes;
jinter.visitor.on('myFn', (node, visitor) => {
  console.info('MyFn node just got accessed:', node);
  return 'proceed'; // tells the interpreter to continue execution 
});

jinter.interpret();
```

For more examples see [`/test`](https://github.com/LuanRT/Jinter/tree/main/test) and [`/examples`](https://github.com/LuanRT/Jinter/tree/main/examples).

## API
* Jinter(code: string)
  * [`interpret()`](#interpret)
  * [`visitor`](#visitor)
  * [`scope`](#scope)

### `interpret()`
Interprets the code passed to the constructor.

### `visitor`
The node visitor. This is responsible for walking the AST and executing the nodes.

### `scope`
Represents the global scope of the program.

## License
Distributed under the [MIT](https://choosealicense.com/licenses/mit/) License.

<p align="right">
  (<a href="#top">back to top</a>)
</p>
