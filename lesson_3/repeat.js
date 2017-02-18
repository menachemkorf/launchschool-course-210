function repeat(string, times) {
  var repeatedString = '';
  if (isNaN(times) || times < 0) {
    return undefined;
  }
  for (var i = 0; i < times; i++) {
    repeatedString += string;
  }

  return repeatedString;
}

console.log(repeat('abc', 1));    // "abc"
console.log(repeat('abc', 2));    // "abcabc"
console.log(repeat('abc', -1));   // undefined
console.log(repeat('abc', 0));    // ""
console.log(repeat('abc', 'a'));  // undefined