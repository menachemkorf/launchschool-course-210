function nthElementOf(arr, index) {
  return arr[index];
}

var digits = [4, 8, 15, 16, 23, 42];

digits[-1] = -42;
console.log(nthElementOf(digits, -1));
console.log(digits[-1]);
console.log(digits['-1']); // Note that we are using a string here