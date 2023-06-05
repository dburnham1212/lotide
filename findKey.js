// ASSERT FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤩🤩🤩 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☠️☠️☠️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

const result2 = findKey({
  "Montana": { sqMiles: 145556 },
  "New York": { sqMiles: 47224},
  "Texas": { sqMiles: 261914 },
  "Alaska": { sqMiles: 570641 }
}, x => x.sqMiles > 150000) // => "noma"

const result3 = findKey({
  "Avengers: Endgame": { year: 2019 },
  "Avatar 2: The Way of Water": { year: 2022 },
  "Avatar": { year: 2009 },
  "Titanic": { year: 1997 },
  "Jurrasic World": { year: 2018 },
  "Jurrasic Park": { year: 1993 }
}, x => x.year < 2000) // => "noma"

// Should all pass
assertEqual(result1, "noma");
assertEqual(result2, "Texas");
assertEqual(result3, "Titanic");