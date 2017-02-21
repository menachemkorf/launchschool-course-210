var myArr = [1, 2, 3, 4, 5];

function reverseArr(arr) {
  var result = [];
  for (var i = arr.length - 1, j = 0; i >= 0; i--, j++) {
    result[j] = arr[i];
  }

  return result;
}

console.log(reverseArr(myArr)); // [5, 4, 3, 2, 1]