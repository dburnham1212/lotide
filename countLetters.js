// FUNCTION IMPLEMENTATION
const countLetters = function(input) {
  input = input.split(" ").join("").toLowerCase();//Normalize the string to be lower case
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

module.exports = countLetters;