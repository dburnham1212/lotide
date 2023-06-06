const eqArrays = require('../eqArrays');

// TEST CODE USING MOCHA AND CHAI
const assert = require("chai").assert;

describe("#testing eqArrays function", () => {
  it("returns true for eqArrays([1, 2, 3], [1, 2, 3])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns false for eqArrays([1, 2, 3], [3, 2, 1])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  
  it('returns true for eqArrays(["1", "2", "3"], ["1", "2", "3"])', () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });

  it('returns false for eqArrays(["1", "2", "3"], ["1", "2", 3])', () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });

  it('returns true for eqArrays(["1", "2", ["3"]], ["1", "2", ["3"]])', () => {
    assert.strictEqual(eqArrays(["1", "2", ["3"]], ["1", "2", ["3"]]), true);
  });

  it('returns false for eqArrays(["1", "2", ["3"]], ["1", "2", [3]])', () => {
    assert.strictEqual(eqArrays(["1", "2", ["3"]], ["1", "2", [3]]), false);
  });

  it('returns true for eqArrays([[2, 3], [4]], [[2, 3], [4]])', () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });

  it('returns true for eqArrays([[2, [3]], [4]], [[2, [3]], [4]])', () => {
    assert.strictEqual(eqArrays([[2, [3]], [4]], [[2, [3]], [4]]), true);
  });

  it('returns false for eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])', () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });

  it('returns false for eqArrays([[2, 3], [4]], [[2, 3], 4])', () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });
});