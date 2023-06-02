// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
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

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const yetAnotherShirtObject =  { size: "small", color: "red" };
const aFinalShirtObject =  { size: "medium", backColor: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);
assertEqual(eqObjects(shirtObject , yetAnotherShirtObject), false);
assertEqual(eqObjects(shirtObject , aFinalShirtObject), false);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const yetAnotherMultiColorShirtObject = { size: "medium", colors: ["red", "pink"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true
assertEqual(eqObjects(multiColorShirtObject  , yetAnotherMultiColorShirtObject), false); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // should not work currently
assertEqual(eqObjects({ a:1, b: { z: 2 }}, { a: 1, b: { z: 2 } }), true); // should not work currently
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: { x : 1 } }), false); // should not work currently
assertEqual(eqObjects({ a: { z: {d: 1} }, b: 2 }, { a: { z: { d: 1 } }, b: 2 }), true); // should not work currently
assertEqual(eqObjects({ a:1, b: { z: 2 }}, { a: 1, b: { z: 2 } }), true); // should not work currently