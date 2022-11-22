const assertEqual = require('./assertEqual');

// countOnly
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (!itemsToCount[item]) {
      continue;
    } // not on my list, skip it

    if (!results[item]) {
      results[item] = 0;
    } // don't have a number, make one

    results[item] += 1;
  }
  return results;
};

// test
const firstNames = [
  'Karl',
  'Salima',
  'Agouhanna',
  'Fang',
  'Kavith',
  'Jason',
  'Salima',
  'Fang',
  'Joe'
];

const result1 = countOnly(firstNames, { Jason: true, Karima: true, Fang: true, Agouhanna: false });

assertEqual(result1.Jason, 1);
assertEqual(result1.Karima, undefined);
assertEqual(result1.Fang, 2);
assertEqual(result1.Agouhanna, undefined);


module.exports = countOnly;
