const findKey = require("../findKey");

// TEST CODE USING MOCHA AND CHAI
const assert = require("chai").assert;

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

describe("#testing findKey function", () =>{
  it("returns 'noma' for result1", () => {
    assert.strictEqual(result1, "noma");
  });

  it("returns 'Texas' for result2", () => {
    assert.strictEqual(result2, "Texas");
  });

  it("returns 'Titanic' for result3", () => {
    assert.strictEqual(result3, "Titanic");
  });
});