export const pipeline = value => {
  return new Pipe(value);
}

class Pipe {
  constructor(value) {
    this.firstArgument = value;
  }

  pipe = (fn, ...args) => {
    const result = fn(...[this.firstArgument].concat(args));
    return new Pipe(result);
  }

  result = () => this.firstArgument;
}