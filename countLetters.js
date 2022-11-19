const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);


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
