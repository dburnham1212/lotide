// FUNCTION DEFINITION
const middle = function(arr) {
  if (arr.length <= 2) { // first check if the array length is equal to or less than 2
    return []; // if so return a blank array
  }
  let midValue = Math.floor(arr.length / 2); // get the mid value by dividing the length by 2 and rounding down
  let midArr = []; // create an array to store mid values
  if (arr.length % 2 === 0) { // if the length is divisible by 2 we need to return 2 values
    midArr.push(arr[midValue - 1]);// when rounded down length is one position ahead so -1 from index
    midArr.push(arr[midValue]);// add the next value after the midpoint as even midpoints contain 2 values
  } else {
    midArr.push(arr[midValue]);// when rounded down length should be the exact index if odd so push that value
  }
  return midArr;// return the array
};

module.exports = middle;