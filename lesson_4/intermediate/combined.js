function combinedArray(even, odd) {
  var newArray = [];

  for (var i = 0; i < even.length; i++) {
    newArray.push(even[i]);
    newArray.push(odd[i]);
  }

  return newArray;
}

var digits = [4, 8, 15, 16, 23, 42];
var letters = ['A', 'L', 'V', 'A', 'R', 'H'];

console.log(combinedArray(digits, letters)); // Returns [4, "A", 8, "L", 15, "V", 16, "A", 23, "R", 42, "H"]