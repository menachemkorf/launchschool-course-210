function trim(string) {
  var trimmedString = '';
  var firstIdx;
  var lastIdx;

  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      firstIdx = i;
      break;
    }
  }

  for (var j = string.length - 1; j >= 0; j--) {
    if (string[j] !== ' ') {
      lastIdx = j;
      break;
    }
  }

  for (var k = firstIdx; k <= lastIdx; k++) {
    trimmedString += string[k];
  }

  return trimmedString;
}

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""