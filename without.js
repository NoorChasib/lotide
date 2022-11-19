// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
//   } else if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
//   }
// }
// assertEqual('Lighthouse Labs', 'Bootcamp')
// assertEqual(1, 1)

// const eqArrays = function (leftSide, rightSide) {
//   const leftString = JSON.stringify(leftSide)
//   const rightString = JSON.stringify(rightSide)

//   if (leftString === rightString) {
//     console.log('true')
//     return true
//   } else if (leftString !== rightString) {
//     console.log('false')
//     return false
//   }
// }

// eqArrays([1, 2, 3], [1, 2, 3])
// eqArrays([1, 2, 3], [3, 2, 1])
// eqArrays(['1', '2', '3'], ['1', '2', '3'])
// eqArrays(['1', '2', '3'], ['1', '2', 3])
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)

// const assertArraysEqual = function (arr1, arr2) {
//   if (eqArrays(arr1, arr2)) {
//     console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`)
//   }
// }

// assertArraysEqual('Lighthouse Labs', 'Bootcamp')
// assertArraysEqual(1, 1)
// assertArraysEqual([1, 2, 3], [1, 2, 3])

const without = function (source, itemsToRemove) {
  const returnArr = []

  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.indexOf(source[i]) === -1) {
      returnArr.push(source[i])
    }
  }
  return returnArr
}

console.log(without([1, 2, 3], [1]))

// without(['1', '2', '3'], [1, 2, '3'])
