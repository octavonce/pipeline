# pipeoperator

A library that creates pipelines in JavaScript. It works exactly like the pipe operator from Elixir or Bash.

## Installation

```
npm install pipeoperator
```

```js
import { pipeline } from 'pipeoperator';
```

## Usage

```js

const pipedValue = pipeline(value)
  .pipe(doSomething)
  .pipe(doSomethingElse)
  .pipe(doAnotherThing)
  .pipe(value => value.map(v => v.property))
  .result();
  
function doSomething(arg) { /* ... */ }
function doSomethingElse(arg) { /* ... */ }
function doAnotherThing(arg) { /* ... */ }
```

`pipe()` also takes additional arguments that are passed into the called function:

```js
const total = pipeline(1)
  .pipe(sum, 3, 2)
  .pipe(sum, 4)
  .result();

// total === 10

function sum(...args) {
  return args.reduce((total, number) => {
    return total + number;
  }, 0);
}
```