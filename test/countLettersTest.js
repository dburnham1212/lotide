const countLetters = require("../countLetters.js");

const assert = require("chai").assert;

let result = countLetters("lighthouse in the house");
let result2 = countLetters("We Were wRong");

describe("#testing countLetters function", () =>{
  it("returns 1 for result['l']", () => {
    assert.strictEqual(result["l"], 1);
  });

  it("returns 2 for result['i']", () => {
    assert.strictEqual(result["i"], 2);
  });

  it("returns 4 for result['h']", () => {
    assert.strictEqual(result["h"], 4);
  });

  it("returns 2 for result['s']", () => {
    assert.strictEqual(result["s"], 2);
  });

  it("returns 3 for result2['w']", () => {
    assert.strictEqual(result2["w"], 3);
  });

  it("returns 2 for result2['r']", () => {
    assert.strictEqual(result2["r"], 2);
  });
});