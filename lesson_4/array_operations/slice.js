function push(arr, val) {
  arr[arr.length] = val;
  return arr.length;
}

function slice(arr, start, end) {
  var newArray = [];
  for (var i = start; i < end; i++) {
    push(newArray, arr[i]);
  }

  return newArray;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));                         // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));     // [ 'b', 'c' ]