const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');


const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;

  if (eqObjects(object1, object2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);

  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};


assertObjectsEqual(eqObjects([1, 2, 3], [1, 2, 3]), true); // => true

module.exports = assertObjectsEqual;
