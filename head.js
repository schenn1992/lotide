const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("Assertion Failed: " + actual + " !== " + expected);
  }
};

const head = function(array) {
  let itemHead;
  if (array.length === 0){
    itemHead = "undefined";
  } else {
    itemHead = array[0];
  }
  return itemHead;
};


assertEqual(head([]), "Hello");
