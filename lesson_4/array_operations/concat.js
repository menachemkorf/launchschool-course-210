function push(arr, val) {
  arr[arr.length] = val;
  return arr.length;
}

function concat(arr1, arr2) {
  var newArray = [];
  for (var i = 0; i < arr1.length; i++) {
    push(newArray, arr1[i]);
  }

  for (i = 0; i < arr2.length; i++) {
    push(newArray, arr2[i]);
  }

  return newArray;
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]