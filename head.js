const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  }
}
assertEqual('Lighthouse Labs', 'Bootcamp')
assertEqual(1, 1)

function head (assertEqual) {
  return assertEqual[0]
}
assertEqual(head([5, 6, 7]), 5)
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello')
