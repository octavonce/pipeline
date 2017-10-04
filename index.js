"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pipeline = exports.pipeline = function pipeline(value) {
  return new Pipe(value);
};

var Pipe = function Pipe(value) {
  var _this = this;

  _classCallCheck(this, Pipe);

  this.pipe = function (fn) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var result = fn.apply(undefined, _toConsumableArray([_this.firstArgument].concat(args)));
    return new Pipe(result);
  };

  this.result = function () {
    return _this.firstArgument;
  };

  this.firstArgument = value;
};