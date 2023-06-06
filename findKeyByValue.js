// FUNCTION IMPLEMENTATION
const findKeyByValue = function(checkObject, value) {
  for (const key in checkObject) {//cycle through our objects keys
    if (checkObject[key] === value) {//check if the object at a specific key is equal to our value
      return key;//return that key
    }
  }
  return undefined;// if we havent found a key that matches our value, return undefined
};

module.exports = findKeyByValue;