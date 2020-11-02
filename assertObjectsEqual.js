const eqArrays = function(arrayA, arrayB) {
  let result = false;
  //use nested loop to iterate each items in each array
  for (let i = 0; i <= arrayA.length - 1; i++) {
    for (let j = 0; j <= arrayB.length - 1; j++) {
      //check each value to determine if they match
      if (arrayA[i] === arrayB[j]) {
        result = true;
      } else {
        result = false;
      }
    }
  }
  return result;
};

const eqObjects = function(object1, object2) {
  let objOneKeys = Object.keys(object1);
  let objTwoKeys = Object.keys(object2);
  if (objOneKeys.length !== objTwoKeys.length) {
    return false;
  }
  for (let key of objOneKeys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      let result = eqArrays(object1[key], object2[key]);
      if (!result) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
        return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`🟢🟢🟢 AssertionPassed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴🔴🔴 AssertionFailed: ${inspect(actual)} !== ${inspect(expected)}`)
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);
assertObjectsEqual(cd, dc);

