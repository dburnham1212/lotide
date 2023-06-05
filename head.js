// FUNCTION IMPLEMENTATION
const head = function(arr) {
  if(arr.length === 0){
    return undefined;
  }
  return arr[0];
};

// export functions
module.exports = head;
