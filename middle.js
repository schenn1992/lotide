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

//Implement middle which will take in an array and return the middle-most element(s) of the given array.
//For arrays with odd number of elements, an array containing a single middle element should be returned.
//For arrays with an even number of elements, an array containing the two elements in the middle should be returned
const middle = function(array) {
  let middleIndex;
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 1) {
    middleIndex = (array.length - 1) / 2; 
    return array.slice(middleIndex, middleIndex + 1);
  } else {
    middleIndex = array.length / 2;
    return array.slice(middleIndex - 1, middleIndex + 1); 
  }

}; // end of for loop

 
//console.log(middle([1, 2]))
//console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]