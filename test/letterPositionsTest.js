let letterPositions = require("../letterPositions");

//TEST CODE USING MOCHA AND CHAI
let assert = require("chai").assert;

let result = letterPositions("lighthouse in the house");

describe("#testing letterPositions function", () => {
  it("returns [0] for result1['l']" , ()=>{
    assert.deepEqual(result["l"], [0]);
  });

  it("returns [3, 5, 15, 18] for result1['h']" , ()=>{
    assert.deepEqual(result["h"], [3, 5, 15, 18]);
  });

  it("returns [4, 14] for result1['t']" , ()=>{
    assert.deepEqual(result["t"], [4, 14]);
  });

  it("returns [7, 20] for result1['u']" , ()=>{
    assert.deepEqual(result["u"], [7, 20]);
  });

  it("returns [9, 16, 22] for result1['e']" , ()=>{
    assert.deepEqual(result["e"], [9, 16, 22]);
  });

  it("returns [1] for letterPositions('hell').e" , ()=>{
    assert.deepEqual(letterPositions("hello").e, [1]);
  });

  it("returns [2, 3] for letterPositions('hello').l" , ()=>{
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });
});