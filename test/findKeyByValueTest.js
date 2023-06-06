const findKeyByValue = require("../findKeyByValue");

// TEST CODE USING MOCHA AND CHAI
const assert = require("chai").assert;

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#testing findKeyByValue function", () => {
  it("returns drama for findKeyByValue(bestTVShowsByGenre, 'The Wire')", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns undefined for findKeyByValue(bestTVShowsByGenre, 'That '70s Show')", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it("returns comedy for findKeyByValue(bestTVShowsByGenre, 'Brooklyn Nine-Nine')", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });

  it("returns undefined for findKeyByValue(bestTVShowsByGenre, 'South Park')", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "South Park"), undefined);
  });
});