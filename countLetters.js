const assertEqual = require('./assertEqual');


const countLetters = function(string) {
  const trimmed = string.replaceAll(' ', '');
  const results = {};

  for (const item of trimmed) {
    if (!results[item]) {
      results[item] = 0;
    }
    results[item] += 1;
  }
  return results;
};

console.log(countLetters('whw hiiHH gsdg sgdg gdg dgd gd '));


module.exports = countLetters;
