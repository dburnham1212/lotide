// FUNCTION IMPLEMENTATION
const tail = function(arr) {
  if (arr.length <= 1) {
    return undefined;
  }
  return arr.slice(1);
};

module.exports = tail;
