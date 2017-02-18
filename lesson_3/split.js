function splitString(string, delimiter) {
  var str = '';
  // no delimiter
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  // delimiter = ''
  if (delimiter === '') {
    for (var i = 0; i < string.length; i++) {
      console.log(string[i]);
    }
    return;
  }

  for (var j = 0; j < string.length; j++) {
    if (string[j] !== delimiter) {
      str += string[j];
    } else {
      if (j !== string.length - 1) {
        console.log(str);
        str = '';
      }
    }
  }

  console.log(str);
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

// splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello