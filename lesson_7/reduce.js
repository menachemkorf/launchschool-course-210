function myReduce(array, func, initial) {
  var index;
  var result;

  if (initial === undefined) {
    index = 1;
    result = array[0];
  } else {
    index = 0;
    result = initial;
  }


  array.slice(index).forEach(function(value) {
    result = func(result, value);
  });

  return result;
}

var smallest = function(result, value) {
  return result <= value ? result : value;
};

var sum = function(result, value) {
  return result + value;
};

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49