const assertEqual = require('./assertEqual');



const findKey = function(array, callback) {
  for (const key in array) {
    if (callback(array[key])) {
      return key;
    }
  }
};


const data = (findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2));


assertEqual(data, 'noma');


module.exports = findKey;
