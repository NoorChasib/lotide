const assertEqual = require('./assertEqual');

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


module.exports = findKeyByValue;
