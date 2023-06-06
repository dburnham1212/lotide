const flatten = require("../flatten");

//TEST CODE USING MOCHA AND CHAI
const assert = require("chai").assert;

describe("#testing flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6 for [1, 2, [3, 4], 5, [6]]", () =>{
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it('returns [[a, b, c, d, e, f, g, h, i, j] for ["a", "b", "c"], "d", ["e", "f"], "g", ["h", "i", "j"]]', () =>{
    assert.deepEqual(flatten([["a", "b", "c"], "d", ["e", "f"], "g", ["h", "i", "j"]]), ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]);
  });
});
