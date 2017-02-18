function substr(string, start, length) {
  var newString = '';
  var pointer = start;

  if (pointer < 0) {
    pointer += string.length;
  }

  for (var i = 0; i < length; i++, pointer++) {
    if (string[pointer] === undefined) {
      break;
    }

    newString += string[pointer];
  }

  return newString;
}

var string = 'hello world';

console.log(substr(string, 2, 4));     // "llo "
console.log(substr(string, -3, 2));    // "rl"
console.log(substr(string, 8, 20));    // "rld"
console.log(substr(string, 0, -20));   // ""
console.log(substr(string, 0, 0));     // ""