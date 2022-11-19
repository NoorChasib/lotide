//assertEqual
// const assertEqual = function(actual, expected) {
//   if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   } else if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   }
// };
// assertEqual('Lighthouse Labs', 'Bootcamp');
// assertEqual(1, 1);

// findKey
const bestTVShowsByGenre = {
  // eslint-disable-next-line camelcase
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

const findKeyByValue = function(genre, show) {

  for (const key in genre) {
    if (genre[key] === show) {
      console.log(show);
      return key;
    }
  }
  return undefined;
};

findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama";
findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined;
