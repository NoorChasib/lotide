const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  }
}
assertEqual('Lighthouse Labs', 'Bootcamp')
assertEqual(1, 1)

const eqArrays = function (leftSide, rightSide) {
  const leftString = JSON.stringify(leftSide)
  const rightString = JSON.stringify(rightSide)

  if (leftString === rightString) {
    console.log('true')
    return true
  } else if (leftString !== rightString) {
    console.log('false')
    return false
  }
}

eqArrays([1, 2, 3], [1, 2, 3])
eqArrays([1, 2, 3], [3, 2, 1])
eqArrays(['1', '2', '3'], ['1', '2', '3'])
eqArrays(['1', '2', '3'], ['1', '2', 3])

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
