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


//TEST CASES
console.log(letterPositions("lighthouse in the house"));

let result = letterPositions("lighthouse in the house");

assertArraysEqual(result["l"], [0]);
assertArraysEqual(result["h"], [3, 5, 15, 18]);
assertArraysEqual(result["t"], [4, 14]);
assertArraysEqual(result["u"], [7, 20]);
assertArraysEqual(result["e"], [9, 16, 22]);

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);