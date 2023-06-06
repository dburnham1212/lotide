// FUNCTION IMPLEMENTATION
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

module.exports = eqArrays;

