const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const without = require('./without');


// const takeUntil = function(array, callback) {
//   array.forEach((item, index) => {
//     if (callback(item)) {
//       array.splice(index);
//     }
//   });
//   return array;
// };


// const takeUntil = function(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i])) {
//       array.splice(i);
//       return array;
//     }
//   }
// };


const takeUntil = function(array, callback) {
  array.map((item, index) => {
    console.log(callback(item));
    if (callback(item)) {
      array.splice(index);
    }
  });
  return array;
};

//test
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", 'been', 'to', 'Hollywood']);


module.exports = takeUntil;
