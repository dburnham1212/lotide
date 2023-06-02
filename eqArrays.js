// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤩🤩🤩 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☠️☠️☠️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2){
  if(arr1.length !== arr2.length) {// check if the arrays are equal in length
    return false;//if not return false
  }
  for(let i = 0; i < arr1.length; i++){// cycle through values in array
    if(Array.isArray(arr1[i]) && Array.isArray(arr2[i])){
      if(!eqArrays(arr1[i], arr2[i])){
        return false;
      }
    } else {
      if(arr1[i] !== arr2[i]){// check if array values are equal 
        return false;// if not return false
      }
    }
  }
  return true;// if all values are declared equal return true
}

// TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should FAIL

assertEqual(eqArrays(["1", "2", ["3"]], ["1", "2", ["3"]]), true); // => should PASS
assertEqual(eqArrays(["1", "2", ["3"]], ["1", "2", [3]]), true); // => should FAIL

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false