function matrixSums(arr) {
  var result = [];
  var sum;

  for (var i = 0; i < arr.length; i++) {
    sum = 0;

    for (var j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }

    result[i] = sum;
  }

  return result;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]])); // Returns [15, 60, 12]