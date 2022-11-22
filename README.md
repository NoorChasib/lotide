# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jcjmrhts/lotide`

**Require it:**

`const _ = require('@jcjmrhts/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: Takes in two arrays and returns whether they are equal or not as a string.
* `assertEqual(actual, expected)`: Compares the actual results with expected results.
* `assertObjectsEqual(object1, object2)`: Takes in two objects and returns whether they are equal or not as a string.
* `countLetters(string)`: Returns an object of the count of each character in a string.
* `countOnly(allItems, itemsToCount)`: Counts the amount of specified items in a given array. 
* `eqArrays(leftSide, rightSide)`: Takes in two arrays and returns whether they are equal or not as a boolean.
* `eqObjects(object1, object2)`: Takes in two objects and returns whether they are equal or not as a boolean.
* `findKey(array, callback)`: Takes in an object and a callback function and return an object's key.
* `findKeyByValue(genre, show)`: Finds an object's key by its value.
* `head(assertEqual)`: Returns the head of a given array
* `letterPositions(sentence)`: Returns the indexes of each character in a string as an object.
* `map(array, callback)`: Returns a clone of the original array.
* `middle(fullArr)`: Returns the middle values of an array.
* `tail(assertEqual)`: Returns the tail of a given array.
* `takeUntil(array, callback)`: Takes in an array and a callback function and returns a new array with all items until a specified condition is met.
* `without(source, itemsToRemove)`: Takes in an array and a callback function and returns a new array without the specified unwanted items
