function repeatedCharacters(str) {
  var charsCount = {};
  var charsRepeated = {};
  var charArray = str.toLowerCase().split('');

  for (var i = 0; i < charArray.length; i++) {
    charsCount[charArray[i]] = charsCount[charArray[i]] + 1 || 1;
  }

  for (char in charsCount) {
    if (charsCount[char] > 1) {
      charsRepeated[char] = charsCount[char];
    }
  }

  return charsRepeated;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }