function firstIndex(arr, value) {
  var index = -1;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      index = i;
      break;
    }
  }

  return index;
}

myArr = [1, 2, 3, 4, 5];
console.log(firstIndex(myArr, 4));
console.log(firstIndex(myArr, 'hello'));
