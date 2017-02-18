function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function checkGoldbach(number) {
  if (number % 2 === 1) {
    console.log(null);
    return;
  }

  var pairs = [];

  for (var i = 2; i <= number / 2; i++) {
    pairs.push([i, number - i]);
  }

  for (var j = 0; j < pairs.length; j++) {
    if (isPrime(pairs[j][0]) && isPrime(pairs[j][1])) {
      console.log(pairs[j][0] + ' ' + pairs[j][1]);
    }
  }
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53
