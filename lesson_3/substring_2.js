function substring(string, start, end) {
  var newString = '';
  var temp;

  if (isNaN(start) || start < 0) {
    start = 0;
  }

  if (end === undefined) {
    end = string.length;
  } else if (isNaN(end) || end < 0){
    end = 0;
  }

  if (start > end) {
    temp = start;
    start = end;
    end = temp;
  }

  for (var i = start; i < end; i++) {
    if (string[i] === undefined) {
      break;
    }

    newString += string[i];
  }

  return newString;
}

var string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"