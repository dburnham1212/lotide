const takeUntil = require("../takeUntil");

// TEST CODE USING MOCHA AND CHAI
const assert = require("chai").assert

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const data3 = [25, 30, 35, 27, 19, 13, 40, 50, 20];

describe("#testing takeUntil function", () => {
  it("returns [1, 2, 5, 7, 2] from takeUntil(data1, x => x < 0)", () => {
    assert.deepEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
  });

  it(`returns ["I've", "been", "to", "Hollywood"] from takeUntil(data2, x => x === ',')`, () => {
    assert.deepEqual(takeUntil(data2, x => x === ','), takeUntil(data2, x => x === ','));
  });

  it("returns [25, 30, 35, 27, 19] from takeUntil(data3, x => x < 19)", () => {
    assert.deepEqual(takeUntil(data3, x => x < 19), [25, 30, 35, 27, 19]);
  });
});