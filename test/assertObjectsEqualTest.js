const assertObjectsEqual = require("../assertObjectsEqual");

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const yetAnotherShirtObject =  { size: "small", color: "red" };
const aFinalShirtObject =  { size: "medium", backColor: "red" };
assertObjectsEqual(shirtObject , anotherShirtObject); // SHOULD PASS
assertObjectsEqual(shirtObject , yetAnotherShirtObject); // SHOULD FAIL
assertObjectsEqual(shirtObject , aFinalShirtObject); // SHOULD FAIL

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual(shirtObject , longSleeveShirtObject)// SHOULD FAIL

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const yetAnotherMultiColorShirtObject = { size: "medium", colors: ["red", "pink"] };
assertObjectsEqual(multiColorShirtObject  , anotherMultiColorShirtObject)// SHOULD PASS
assertObjectsEqual(multiColorShirtObject  , yetAnotherMultiColorShirtObject)// SHOULD FAIL

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertObjectsEqual(multiColorShirtObject  , longSleeveMultiColorShirtObject) // SHOULD FAIL