[actions]: https://github.com/LuanRT/Jinter/actions
[say-thanks]: https://saythanks.io/to/LuanRT

<h1 align=center>
  Jinter
</h1>

<p align=center>
   <i>A tiny JavaScript interpreter written in TypeScript</i>
</p>

<div align="center">

  [![Tests](https://github.com/LuanRT/Jinter/actions/workflows/node.js.yml/badge.svg?branch=main)][actions]
  [![Say thanks](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg)][say-thanks]

</div>

> **Note**: This project is experimental and not all JavaScript features are implemented! [^1]

### Usage

Execute some JavaScript code:
```ts
// const Jinter = require('jintr').default;
import Jinter from 'jintr';

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
Inject your own functions and variables into the interpreter;
```ts
// ...

jinter.visitor.on('println', (node: any, visitor: Visitor) => {
  const args = node.arguments.map((arg: any) => visitor.visitNode(arg));
  return console.log(...args);
});

// Ex: str.toArray();
jinter.visitor.on('toArray', (node: any, visitor: Visitor) => {
  const obj = visitor.visitNode(node.callee.object);
  return obj.split('');      
});

// Or you can just intercept access to specific nodes;
jinter.visitor.on('myFn', (node: any, visitor: Visitor) => {
  console.info('MyFn node just got accessed:', node);
  return 'proceed'; // tells the interpreter to continue execution 
});

jinter.interpret();
```

More examples are available in the [`test`](/test) & [`examples`](/examples) folders.

## License
Distributed under the [MIT](https://choosealicense.com/licenses/mit/) License.

<!-- Footnotes -->
[^1]: This project was originally developed for use in [YouTube.js](https://github.com/LuanRT/YouTube.js).

<p align="right">
  (<a href="#top">back to top</a>)
</p>
