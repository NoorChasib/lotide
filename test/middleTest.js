// const assertArraysEqual = require('../assertArraysEqual');

// console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
// console.log(middle([1, 3, 9, 10, 15, 16, 18, 35, 16]));

// assertArraysEqual((middle([3, 16, 18, 12, 14])), [16]);


const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [6] for [5, 6, 7]", () => {
    assert.deepEqual(middle([5, 6, 7]), [6]);
  });
});
