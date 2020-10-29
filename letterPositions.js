const assertArraysEqual = function(arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)) {
    console.log(`🟢 Assertion Passed:  ${arrayA}  === ${arrayB}`);
  } else {
    console.log(`🔴 Assertion Failed: ${arrayA}  !== ${arrayB}`);
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


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i <= sentence.length - 1; i++) { 
    let currentLetter = sentence[i]; 
    let currentIndex = i; 
    if (results[currentLetter]) { 
      results[currentLetter].push(currentIndex);
      //console.log(results)
    } else {
      results[currentLetter] = [currentIndex];
      //console.log(results)
    }
  }
  return results;  

};

console.log(assertArraysEqual(letterPositions("hello"), [1]));

