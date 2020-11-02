// const tail = require("../tail.js")
// const assertEqual = require("../assertEqual.js")

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); 
// assertEqual(words.length, 3); 

const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  
  it("returns 'lighthouse', 'labs' for words", () => {
    assert.strictEqual(tail["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]
  });


});
  


