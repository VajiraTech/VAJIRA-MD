# Installation
> `npm install --save @types/component-emitter`

# Summary
This package contains type definitions for component-emitter (https://www.npmjs.com/package/component-emitter).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/component-emitter.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/component-emitter/index.d.ts)
````ts
// TypeScript Version: 2.2

interface Emitter<Event = string> {
    on(event: Event, listener: Function): Emitter;
    once(event: Event, listener: Function): Emitter;
    off(event?: Event, listener?: Function): Emitter;
    emit(event: Event, ...args: any[]): Emitter;
    listeners(event: Event): Function[];
    hasListeners(event: Event): boolean;
    removeListener(event?: Event, listener?: Function): Emitter;
    removeEventListener(event?: Event, listener?: Function): Emitter;
    removeAllListeners(event?: Event): Emitter;
}

declare const Emitter: {
    (obj?: object): Emitter;
    new(obj?: object): Emitter;
};

export = Emitter;

````

### Additional Details
 * Last updated: Mon, 06 Nov 2023 22:41:05 GMT
 * Dependencies: none

# Credits
These definitions were written by [Peter Snider](https://github.com/psnider).
