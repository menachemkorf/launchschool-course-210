// function logMultiples(number) {
//   for (var i = 100; i >= number; i--) {
//     if (i % number === 0 && i % 2 === 1) {
//       console.log(i);
//     }
//   }
// }

function maxMultiple(number) {
  return Math.floor(100 / number) * number;
}

function logMultiples(number) {
  // max = Math.floor(100 / number) * number;
  for (var i = maxMultiple(number); i >= number; i -= number) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

logMultiples(17);
logMultiples(21);