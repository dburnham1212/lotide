const eqObjects = require("../eqObjects");

//TESTS CODE USING MOCHA AND CHAI
const assert = require("chai").assert;

//colorless shirt test code
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const yetAnotherShirtObject =  { size: "small", color: "red" };
const aFinalShirtObject =  { size: "medium", backColor: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

// colored shirt test code
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const yetAnotherMultiColorShirtObject = { size: "medium", colors: ["red", "pink"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

describe("#testing eqObjects function", () => {
  it("returns true for eqObjects(shirtObject, anotherShirtObject)", () => {
    assert.strictEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });

  it("returns false for eqObjects(shirtObject, yetAnotherShirtObject)", () => {
    assert.strictEqual(eqObjects(shirtObject, yetAnotherShirtObject), false);
  });

  it("returns false for eqObjects(shirtObject, aFinalShirtObject)", () => {
    assert.strictEqual(eqObjects(shirtObject, aFinalShirtObject), false);
  });

  it("returns false for eqObjects(shirtObject, longSleeveShirtObject)", () => {
    assert.strictEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  });

  it("returns true for eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)", () => {
    assert.strictEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  });

  it("returns false for eqObjects(multiColorShirtObject, yetAnotherMultiColorShirtObject)", () => {
    assert.strictEqual(eqObjects(multiColorShirtObject, yetAnotherMultiColorShirtObject), false);
  });

  it("returns false for eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject)", () => {
    assert.strictEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
  });

  it("returns true for eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })", () => {
    assert.strictEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });

  it("returns true for eqObjects({ a:1, b: { z: 2 }}, { a: 1, b: { z: 2 } })", () => {
    assert.strictEqual(eqObjects({ a:1, b: { z: 2 }}, { a: 1, b: { z: 2 } }), true);
  });

  it("returns false for eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: { x : 1 } })", () => {
    assert.strictEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: { x : 1 } }), false);
  });

  it("returns true for eqObjects({ a: { z: {d: 1} }, b: 2 }, { a: { z: { d: 1 } }, b: 2 })", () => {
    assert.strictEqual(eqObjects({ a: { z: {d: 1} }, b: 2 }, { a: { z: { d: 1 } }, b: 2 }), true);
  });
});
