
const assertEqual = require("./assertEqual");

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

module.exports = eqArrays;
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
