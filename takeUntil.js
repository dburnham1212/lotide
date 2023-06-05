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

const takeUntil = function(array, callback) {
  let output = [];//create an array to ouput
  for (const item of array) {// cycle through the array
    if (callback(item) === true) {//check if the callback is a truthy value
      return output;//if so return the list
    }
    output.push(item);// if not add it to the list
  }
  return output;// return output if we never find a truthy value
};

module.exports = takeUntil;

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log('---');

const data3 = [25, 30, 35, 27, 19, 13, 40, 50, 20];
const results3 = takeUntil(data3, x => x < 19);
console.log(results3);

// SHOULD PASS
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);
assertArraysEqual(takeUntil(data3, x => x < 19), [25, 30, 35, 27, 19]);