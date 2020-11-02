const assertEqual = require('./assertEqual');

const head = function(array) {
  let itemHead;
  if (array.length === 0) {
    itemHead = "undefined";
  } else {
    itemHead = array[0];
  }
  return itemHead;
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

