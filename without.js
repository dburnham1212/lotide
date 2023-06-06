// FUNCTION IMPLEMENTATION
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

