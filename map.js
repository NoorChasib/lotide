const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// assertEqual('Lighthouse Labs', 'Bootcamp')
// assertEqual(1, 1)

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

// eqArrays([1, 2, 3], [1, 2, 3])
// eqArrays([1, 2, 3], [3, 2, 1])
// eqArrays(['1', '2', '3'], ['1', '2', '3'])
// eqArrays(['1', '2', '3'], ['1', '2', 3])
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// assertArraysEqual('Lighthouse Labs', 'Bootcamp')
// assertArraysEqual(1, 1)
// assertArraysEqual([1, 2, 3], [1, 2, 3])

assertArraysEqual(words, words);
