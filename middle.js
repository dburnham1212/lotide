// TEST/ASSERTION FUNCTIONS
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

// ACTUAL FUNCTION
const middle = function(arr) {
  if (arr.length <= 2) { // first check if the array length is equal to or less than 2
    return []; // if so return a blank array
  }
  let midValue = Math.floor(arr.length / 2); // get the mid value by dividing the length by 2 and rounding down
  let midArr = []; // create an array to store mid values
  if (arr.length % 2 === 0) { // if the length is divisible by 2 we need to return 2 values
    midArr.push(arr[midValue - 1]);// when rounded down length is one position ahead so -1 from index
    midArr.push(arr[midValue]);// add the next value after the midpoint as even midpoints contain 2 values
  } else {
    midArr.push(arr[midValue]);// when rounded down length should be the exact index if odd so push that value
  }
  return midArr;// return the array
};

// TEST CODE
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []

assertArraysEqual(middle([1, 2, 3]), [2]); // => [2] rounded length / 2 = 1
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3] rounded length / 2 = 2;

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3] rounded length / 2 = 2
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4] rounded length / 2 = 3

assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); // => [2, 3] rounded length / 2 = 2
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]); // => [3, 4] rounded length / 2 = 3