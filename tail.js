const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  }
}
assertEqual('Lighthouse Labs', 'Bootcamp')
assertEqual(1, 1)

function tail (assertEqual) {
  return assertEqual.slice(1)
}
const words = ['Yo Yo', 'Lighthouse', 'Labs']
tail(words)
assertEqual(words.length, 3)
