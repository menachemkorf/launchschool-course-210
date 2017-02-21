function push(arr, val) {
  arr[arr.length] = val;
  return arr.length;
}

var count = [1, 2, 3];
console.log(push(count, 4));   // 4
console.log(count);