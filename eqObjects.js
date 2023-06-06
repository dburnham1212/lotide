const eqArrays = require("./eqArrays");

// FUNCTION IMPLEMENTATION
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) { // if the total number of keys is unequal return false
    return false;
  }
  for (const key in object1) {
    if (Object.keys(object2).indexOf(key) === -1) {//if object 2 does not have the key from object 1
      return false;//return false
    }
    if (object1[key] !== object2[key]) {//if object 2 does have the key from object 1 but the values are inequal
      if (!Array.isArray(object1[key]) || !Array.isArray(object2[key])) {//if either of the values is not an array
        if(typeof object1[key] === "object" && typeof object2[key] === "object"){
          if(!eqObjects(object1[key], object2[key])){
            return false
          }
        } else {
          return false;//return false
        }
      } else {
        if (!eqArrays(object1[key], object2[key])) {// if both values are an array but are inequal
          return false;
        }
      }  
    }
  }
  return true;
};

module.exports = eqObjects;