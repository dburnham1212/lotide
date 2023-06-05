// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
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
    if(arr1[i] !== arr2[i]){// check if array values are equal 
      return false;// if not return false
    }
  }
  return true;// if all values are declared equal return true
}


const without = function(arr1, arr2){
  let retArr = [];// create an array to store wanted values
  for(let i = 0; i < arr1.length; i++){// cycle through first array
    if(arr2.indexOf(arr1[i]) == -1){// check if second array has item from first array
      retArr.push(arr1[i]);// if it does not push the item from the first array
    }
  }
  return retArr;// return the array of all wanted values
}

module.exports = without;

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => Should PASS
assertArraysEqual(without([1, 2, 3], [1]), [1]); // => Should FAIL
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => Should PASS
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), [1, 2]); // => Should FAIL

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);