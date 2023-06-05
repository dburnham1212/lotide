const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle.js");


// TEST CODE
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []

assertArraysEqual(middle([1, 2, 3]), [2]); // => [2] rounded length / 2 = 1
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3] rounded length / 2 = 2;

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3] rounded length / 2 = 2
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4] rounded length / 2 = 3

assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); // => [2, 3] rounded length / 2 = 2
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]); // => [3, 4] rounded length / 2 = 3