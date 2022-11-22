const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const without = function(source, itemsToRemove) {
  const returnArr = [];

  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.indexOf(source[i]) === -1) {
      returnArr.push(source[i]);
    }
  }
  return returnArr;
};

console.log(without([1, 2, 3], [1]));

// without(['1', '2', '3'], [1, 2, '3'])

module.exports = without;
