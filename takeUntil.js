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

const takeUntil = function(array, callback) {
  let result = [];
  for (let num of array) {
    if (callback(num)){
      break;
    } else {
      result.push(num);
    }
  }
  return result;
};

module.exports = takeUntil;
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

//assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);


