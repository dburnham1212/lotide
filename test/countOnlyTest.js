const countOnly = require("../countOnly");

//TEST CODE USING MOCHA AND CHAI
const assert = require("chai").assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false, "Salima": true, "Joe": false });

describe("#testing countOnly", () => {
  it("returns 1 for result1['Jason']", () => {
    assert.strictEqual(result1["Jason"], 1);
  });

  it("return undefined for result1[Karima]", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });

  it("returns 2 for result1['Fang']", () => {
    assert.strictEqual(result1["Fang"], 2);
  });

  it("return undefined for result1[Agouhanna]", () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });

  it("returns 2 for result1['Salima']", () => {
    assert.strictEqual(result1["Salima"], 2);
  });

  it("return undefined for result1[Joe]", () => {
    assert.strictEqual(result1["Joe"], undefined);
  });
});