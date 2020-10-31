const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("Assertion Failed: " + actual + " !== " + expected);
  }
};


const eqObjects = function(object1, object2) {
  let objOneKeys = Object.keys(object1);
  let objTwoKeys = Object.keys(object2);
  if (objOneKeys.length !== objTwoKeys.length) {
    return false;
  }
  for (let keyOne of objOneKeys) {
    for (let keyTwo of objTwoKeys) {
      if (objOneKeys[keyOne] === objTwoKeys[keyTwo]) {
        return true;
      } else {
        return false;
      }
    }  
  }
  
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

