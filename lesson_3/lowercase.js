function toLowerCase(string) {
  var lower = '';
  var asciiNumeric;
  for (var i = 0; i < string.length; i++) {
    if (string[i] >= 'A' && string[i] <= 'Z') {
      asciiNumeric = string.charCodeAt(i);
      asciiNumeric += 32;
      lower += String.fromCharCode(asciiNumeric);
    } else {
      lower += string[i];
    }
  }

  return lower;
}

console.log(toLowerCase('ALPHABET'));      // "alphabet"
console.log( toLowerCase('123'));           // "123"
console.log(toLowerCase('abcDEF'));        // "abcdef"