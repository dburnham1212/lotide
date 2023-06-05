const assertEqual = require('../assertEqual');
const tail = require('../tail');

//TESTING USING MOCHA & CHAI
const assert = require('chai').assert;

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);

// Test Case 2: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail testing", () => {
  it("returns undefined for []", () => {
    assert.strictEqual(tail([]), undefined);
  });

  it("returns undefined for ['Hello']", () => {
    assert.strictEqual(tail(["Hello"]), undefined);
  });
  
  it("returns length 2 for result.length", () => {
    assert.strictEqual(result.length, 2);
  });

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });

  it("returns length 3 for words.length", () => {
    assert.strictEqual(words.length, 3);
  });

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
});