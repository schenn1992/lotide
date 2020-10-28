const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("Assertion Failed: " + actual + " !== " + expected);
  }
};

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


