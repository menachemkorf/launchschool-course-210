// Write a function that takes an array argument and returns a new array that contains all the argument's elements in their original order followed by all the argument's elements in reverse order.
function appendReverse(arr) {
  return arr.concat(arr.slice().reverse());
}

var digits = [4, 8, 15, 16, 23, 42];
console.log(appendReverse(digits)); // [4, 8, 15, 16, 23, 42, 42, 23, 16, 15, 8, 4]