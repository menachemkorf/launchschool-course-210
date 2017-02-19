var baseCharCodes = {
  'a': 'a'.charCodeAt(0),
  'z': 'z'.charCodeAt(0),
  'A': 'A'.charCodeAt(0),
  'Z': 'Z'.charCodeAt(0),
}

var halfLength = 12;
var rotateCount = 13;

function isFirstAlphabetHalf(charCode) {
  return (charCode >= baseCharCodes['A'] &&
           charCode < (baseCharCodes['A'] + halfLength)) ||
          (charCode >= baseCharCodes['a'] &&
           charCode < (baseCharCodes['a'] + halfLength));
}

function isLastAlphabetHalf(charCode) {
  return (charCode <= baseCharCodes['Z'] &&
          charCode > (baseCharCodes['Z'] - halfLength)) ||
         (charCode <= baseCharCodes['z'] &&
          charCode > (baseCharCodes['z'] - halfLength));
}

function rot13(string) {
  var newString = '';
  var asciiNumeric;

  for (var i = 0; i < string.length; i++) {
    asciiNumeric = string.charCodeAt(i);
    if (isFirstAlphabetHalf(asciiNumeric)) {
      newString += String.fromCharCode(asciiNumeric + rotateCount);
    } else if (isLastAlphabetHalf(asciiNumeric)) {
      newString += String.fromCharCode(asciiNumeric - rotateCount);
    } else {
      newString += string[i];
    }
  }

  return newString;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.
