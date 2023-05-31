// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤩🤩🤩 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☠️☠️☠️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(input) {
  input = input.toLowerCase();//Normalize the string to be lower case
  let returnObject = {};//create an empty object to write to
  for (const char of input) {//cycle through input
    if (returnObject[char]) {//check if we already have a value at the key
      returnObject[char] += 1;//if so increment it
    } else {
      returnObject[char] = 1;//otherwise create it
    }
  }
  return returnObject;// return the created object
};

let result = countLetters("lighthouse in the house");

assertEqual(result["l"], 1);
assertEqual(result["i"], 2);
assertEqual(result["h"], 4);
assertEqual(result["s"], 2);

let result2 = countLetters("We Were wRong");

assertEqual(result2["w"], 3);
assertEqual(result2["r"], 2);