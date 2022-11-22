const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const without = require('./without');


const middle = function(fullArr) {
  const sortedArr = fullArr.sort();
  const arrInside = sortedArr.length;

  if (arrInside >= 3) {
    if (arrInside % 2 === 0) {
      const evenNumPos = (Math.round(arrInside / 2));
      const leftNumPos = evenNumPos - 1;
      const evenNum = [fullArr[leftNumPos], fullArr[evenNumPos]];
      return evenNum;
    } else {
      const oddNumPos = (Math.round(arrInside / 2 - 1));
      const oddNum = [fullArr[oddNumPos]];
      return oddNum;
    }
  } else {
    return;
  }
};

module.exports = middle;
