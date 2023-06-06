# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: (used for testing) Determines if two arrays are equal to one another and prints out a message if the assertion passes or fails
* `assertEqual`: (used for testing) Determines if two values are equal to one another and prints out a message if the assertion passes or fails
* `assertObjectsEqual`: (used for testing) Determines if two objects are equal to one another and prints out a message if the assertion passes or fails
* `countLetters`: Used to count the number of times a character appears in a string and returns an object with keys for each character and their respective counts
* `countOnly`: Counts the number of times a string appears in an array and returns an object with keys for each string and their respective counts 
* `eqArrays`: Checks if two arrays are equal. Returns true if they are and false if they are not.
* `eqObjects`: Checks if two objects are equal. Returns true if they are and false if they are not.
* `findKey`: Checks an object to see if the object stores a key based off of the result of comparing it against a callback function. Will return the first key that matches the callback parameters. 
* `findKeyByValue`: Checks an object to see if the object stores a key by comparing it to a value. If the value stored in the key matches the value we have specified return the key.
* `flatten`: Will take an array and if the array is nested will return an array of where the nested elements have been added to one single unnested array in order.
* `head`: Takes in an array and returns its first element. If the length of the array is 0 returns undefined.
* `letterPositions`: Takes a string and returns an object with the positions of the letters in the string (ignoring spaces).
* `map`: Takes an array and applies a callback function to each of the values stored within the array. It returns an array with the altered values. 
* `middle`: Takes in an array and returns an array with the value stored at the middle of the array for odd array lengths. For even array lengths stores the two values at the midpoint in an array and returns that.
* `tail`: Takes in an array and returns the array without the first element.
* `takeUntil`: Takes in an array and returns an array that stores the values in it until a certain callback functions parameters have been met.
* `without`: Takes in two arrays and returns an array whose values are equal in both arrays. 