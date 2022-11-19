
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);

const eqArrays = function(leftSide, rightSide) {
  const leftString = JSON.stringify(leftSide);
  const rightString = JSON.stringify(rightSide);

  if (leftString === rightString) {
    console.log('true');
    return true;
  } else if (leftString !== rightString) {
    console.log('false');
    return false;
  }
};

// eqArrays([1, 2, 3], [1, 2, 3]);
// eqArrays([1, 2, 3], [3, 2, 1]);
// eqArrays(['1', '2', '3'], ['1', '2', '3']);
// eqArrays(['1', '2', '3'], ['1', '2', 3]);
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// assertArraysEqual('Lighthouse Labs', 'Bootcamp');
// assertArraysEqual(1, 1);
// assertArraysEqual([1, 2, 3], [1, 2, 3]);


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
