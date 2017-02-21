function join(arr, str) {
  var joined = '';

  for (var i = 0; i < arr.length; i++) {
    joined += String(arr[i]);

    if (i < arr.length -1) {
      joined += str;
    }
  }

  return joined;
}


console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'