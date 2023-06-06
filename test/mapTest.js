const map = require("../map");

// TEST CODE USING MOCHA AND CHAI
const assert = require("chai").assert;

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);

let nums = [1, 2, 3, 4, 5];
const results2 = map(nums, num => num * 2);

let animals = ["dog", "cat", "bunny", "snake"];
const results3 = map(animals, animal => "pet_" + animal);

describe("testing map function", () => {
  it('returns ["g", "c", "t", "m", "t"] for results1', () => {
    assert.deepEqual(results1, ["g", "c", "t", "m", "t"]);
  });

  it('returns [2, 4, 6, 8, 10] for results2', () => {
    assert.deepEqual(results2, [2, 4, 6, 8, 10]);
  });

  it('returns ["pet_dog", "pet_cat", "pet_bunny", "pet_snake"] for results3', () => {
    assert.deepEqual(results3, ["pet_dog", "pet_cat", "pet_bunny", "pet_snake"]);
  });
});



