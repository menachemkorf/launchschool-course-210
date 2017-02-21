function push(arr, val) {
  arr[arr.length] = val;
  return arr.length;
}

function splice(arr, start, len) {
  var newArray = [];
  for (var i = start; i < start + len; i++) {
    push(newArray, arr[i]);
    arr[i] = arr[i + len];
  }

  arr.length = arr.length - len;
  return newArray;
}

var count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));        // [ 3, 4, 5, 6, 7 ]
console.log(count);                      // [ 1, 2, 8]