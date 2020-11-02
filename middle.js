const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

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

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]); // => [3,4]

module.exports = middle;