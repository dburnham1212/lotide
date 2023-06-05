const flatten = function(arr) {
  let returnArr = [];// create an array to store the values
  for (let arrItem of arr) {// create a for loop to cycle through the initial array
    if (Array.isArray(arrItem)) {// check if the value is an array itself
      for (let item of arrItem) {// if so cycle through that array
        returnArr.push(item);// push each individual item to the return array
      }
    } else {// if arrItem is not an array itself
      returnArr.push(arrItem);// just push it to the return array
    }
  }
  return returnArr;
};

module.exports = flatten;

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten([["a", "b", "c"], "d", ["e", "f"], "g", ["h", "i", "j"]])); // => [a, b, c, d, e, f, g, h, i, j]