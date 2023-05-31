// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🤩🤩🤩 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☠️☠️☠️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {// check if the arrays are equal in length
    return false;//if not return false
  }
  for (let i = 0; i < arr1.length; i++) {// cycle through values in array
    if (arr1[i] !== arr2[i]) {// check if array values are equal
      return false;// if not return false
    }
  }
  return true;// if all values are declared equal return true
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => should FAIL
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => should FAIL