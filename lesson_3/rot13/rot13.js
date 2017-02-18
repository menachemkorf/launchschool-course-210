function rot13(string) {
  var newString = '';
  var asciiNumeric;

  var baseCharCodes = {
    'a': 'a'.charCodeAt(0),
    'z': 'z'.charCodeAt(0),
    'A': 'A'.charCodeAt(0),
    'Z': 'Z'.charCodeAt(0),
  }

  for (var i = 0; i < string.length; i++) {
    asciiNumeric = string.charCodeAt(i);
    if ((asciiNumeric >= baseCharCodes['A'] &&
         asciiNumeric < (baseCharCodes['A'] + 12)) ||
        (asciiNumeric >= baseCharCodes['a'] &&
         asciiNumeric < (baseCharCodes['a'] + 12))) {
      newString += String.fromCharCode(asciiNumeric + 13);
    } else if ((asciiNumeric <= baseCharCodes['Z'] &&
                asciiNumeric > (baseCharCodes['Z'] - 12)) ||
               (asciiNumeric <= baseCharCodes['z'] &&
                asciiNumeric > (baseCharCodes['z'] - 12))) {
      newString += String.fromCharCode(asciiNumeric - 13);
    } else {
      newString += string[i];
    }
  }

  return newString;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.
