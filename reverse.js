const reverseString = function() {
  let words = process.argv.slice(2);
  let reverseWord = "";
  let reverseWordArray = [];
  for (let i = 0; i <= words.length - 1; i++) { // get each word from cli
    let currentWords = words[i].split() // return ['hello'] ['goodbye']
    for (let currentWord of currentWords) { 
      console.log(currentWord);
      for (let j = currentWord.length - 1; j >= 0; j--) {
        reverseWord += currentWord[j];
      }
    }
  }
};

reverseString();

module.exports = reverseString;