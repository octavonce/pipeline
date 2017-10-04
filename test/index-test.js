const { expect } = require('chai');
const td = require('testdouble');
const { pipeline } = require('../index');

describe('pipe-operator', function() {
  describe('pipe()', function() {
    it('can be called with a single argument', function() {
      const stub = td.function();
      pipeline(1).pipe(stub);
      td.verify(stub(1));
    });

    it('can be called with multiple arguments', function() {
      const stub = td.function();
      pipeline(1).pipe(stub, 3, 2, 4);
      td.verify(stub(1, 3, 2, 4));
    });
  });

  describe('value()', function() {
    it('returns the last computed value of a pipe chain', function() {
      const stub = td.function();
      td.when(stub(1)).thenReturn('hello');
      const result = pipeline(1).pipe(stub).result();
      expect(result).to.equal('hello');
    });
  });

  describe('examples', function() {
    it('with a single pipe() call', function() {
      function sum(a, b) {
        return a + b;
      }

      const result = pipeline(1).pipe(sum, 5).result();
      expect(result).to.equal(6);
    });

    it('with multiple pipe() chains', function() {
      function sum(a, b) {
        return a + b;
      }

      const result = pipeline(1).pipe(sum, 5).pipe(sum, 4).result();
      expect(result).to.equal(10);
    });

    it('with multiple arguments in a pipe() call', function() {
      function sum(a, b, c, d) {
        return a + b + c + d;
      }

      const result = pipeline(1).pipe(sum, 3, 2, 4).result();
      expect(result).to.equal(10);
    });
  });
});
