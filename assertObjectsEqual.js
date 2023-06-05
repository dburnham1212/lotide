// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`🤩🤩🤩 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`☠️☠️☠️ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
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
        return false;//return false
      }
      if (!eqArrays(object1[key], object2[key])) {// if both values are an array but are inequal
        return false;
      }
    }
  }
  return true;
};

module.exports = assertObjectsEqual;

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const yetAnotherShirtObject =  { size: "small", color: "red" };
const aFinalShirtObject =  { size: "medium", backColor: "red" };
assertObjectsEqual(shirtObject , anotherShirtObject); // SHOULD PASS
assertObjectsEqual(shirtObject , yetAnotherShirtObject); // SHOULD FAIL
assertObjectsEqual(shirtObject , aFinalShirtObject); // SHOULD FAIL

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual(shirtObject , longSleeveShirtObject)// SHOULD FAIL

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const yetAnotherMultiColorShirtObject = { size: "medium", colors: ["red", "pink"] };
assertObjectsEqual(multiColorShirtObject  , anotherMultiColorShirtObject)// SHOULD PASS
assertObjectsEqual(multiColorShirtObject  , yetAnotherMultiColorShirtObject)// SHOULD FAIL

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertObjectsEqual(multiColorShirtObject  , longSleeveMultiColorShirtObject) // SHOULD FAIL