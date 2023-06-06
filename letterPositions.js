//HELPER FUNCTIONS
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

// FUNCTION IMPLEMENTATION
const letterPositions = function(sentence) {
    sentence = sentence.toLowerCase();//Normalize the string to be lower case with no spaces
    let returnObject = {};//create an empty object to write to
    for (let i = 0; i < sentence.length; i++) {//cycle through sentence
      if (returnObject[sentence[i]] && sentence[i] !== " ") {//check if we already have a value at the key
        returnObject[sentence[i]].push(i);//if so push the current index to the array stored there
      } else {
        returnObject[sentence[i]] = [i];//otherwise create it and set the first value to the current index
      }
    }
    return returnObject;// return the created object
};

module.exports = letterPositions;