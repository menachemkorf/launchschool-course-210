function arrayToString(arr) {
  str = '';
  for (var i = 0; i < arr.length; i++) {
    str += String(arr[i]);
  }

  return str;
}

console.log(arrayToString([1, 'ab', 54]));