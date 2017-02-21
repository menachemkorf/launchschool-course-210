function indexOf(arr, val) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === val) {
      return i;
    }
  }

  return -1;
}


console.log(indexOf([1, 2, 3, 3], 3));         // 3
console.log(indexOf([1, 2, 3], 4));            // -1