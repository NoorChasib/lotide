const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
console.log(middle([1, 3, 9, 10, 15, 16, 18, 35, 16]));

assertArraysEqual((middle([3, 16, 18, 12, 14])), [16]);
