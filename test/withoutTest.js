const without = require("../without");

// TEST CODE USING MOCHA AND CHAI
const assert = require("chai").assert;

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case

describe("#testing without function", () => {
  it("returns [2, 3] from without([1, 2, 3], [1])", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it('returns ["1", "2"] from without(["1", "2", "3"], [1, 2, "3"])', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it('returns ["hello", "world", "lighthouse"] from words', () => {
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});