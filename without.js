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

const assertArraysEqual = function(arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)) {
    console.log(`🟢 Assertion Passed:  ${arrayA}  === ${arrayB}`);
  } else {
    console.log(`🔴 Assertion Failed: ${arrayA}  !== ${arrayB}`);
  }
};

const without = function(source, itemsToRemove) {
  //loop through each array, and compare each value
  let source2 = [...source];
  for (let i = 0; i < source2.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source2[i] === itemsToRemove[j]) { //if the value match, remove
        source2.splice(i, 1); //remove item at index
      }
    }
  }
  return source2;
};

module.exports = without;

// console.log(without([1, 2, 3], [1])); // [2, 3]
// console.log(without(["1", "2", "3"], ["1", "3", 2])); // ["1", "2"]

