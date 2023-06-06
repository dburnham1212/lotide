// FUNCTION IMPLEMENTATION
const findKey = function(object, callback){
  for(let key in object){
    if(callback(object[key])){
      return key;
    }
  }
  return "No Key Found";
};

module.exports = findKey;
