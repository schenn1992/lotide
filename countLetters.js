const countLetters = function(sentences) {
  let results = {};
  
  for (let letter of sentences) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

console.log(countLetters("LHL"));