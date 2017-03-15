function wordCount(str) {
  var result = {};
  var words = str.split(' ');

  for (var i = 0; i < words.length; i++) {
    result[words[i]] = result[words[i]] + 1 || 1;
  }

  return result;
}

console.log(wordCount('box car cat bag box'));    // { box: 2, car: 1, cat: 1, bag: 1 }