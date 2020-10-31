const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("🟢🟢🟢 Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🔴🔴🔴 Assertion Failed: " + actual + " !== " + expected);
  }
};


const eqObjects = function(object1, object2) {
  let objOneKeys = Object.keys(object1);
  let objTwoKeys = Object.keys(object2);
  if (objOneKeys.length !== objTwoKeys.length) {
    return false;
  }
  
  for (let key of objOneKeys) {
    //console.log(object1[key]);
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
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

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

const cd = { c: "1", d: ["2", 3] };
//const dc = { d: ["2", 3], c: "1" };
//eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
