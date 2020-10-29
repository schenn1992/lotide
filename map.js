const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//const results1 = map(words, word => word[0]);
//console.log(results1);

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

assertArraysEqual(map(["Hello", "World"], word => word[0]), map(["Hi", "Windy"], word => word[0]));