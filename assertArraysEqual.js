
const eqArrays = require("./eqArrays");

const assertArraysEqual = function(arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)) {
    console.log(`🟢🟢🟢 Assertion Passed:  ${arrayA}  === ${arrayB}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${arrayA}  !== ${arrayB}`);
  }
};

//assertArraysEqual([1, 2, 3], [1, 2, 3]); 

module.exports = assertArraysEqual;
