// FUNCTION IMPLEMENTATION
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