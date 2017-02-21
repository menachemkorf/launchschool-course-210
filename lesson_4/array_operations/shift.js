function shift(arr) {
  var first = arr[0];
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length--;
  return first;
}


var count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]