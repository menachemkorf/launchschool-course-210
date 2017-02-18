// function gcd(highNumber, lowNumber) {
//   for (var i = lowNumber; i >= 1; i--) {
//     if (highNumber % i === 0 && lowNumber % i === 0) {
//       return i;
//     }
//   }
// }

function gcd(num1, num2) {
  highNumber = Math.max(num1, num2);
  lowNumber = Math.min(num1, num2);

  while (lowNumber !== 0) {
    var temp = lowNumber;
    lowNumber = highNumber % lowNumber;
    highNumber = temp;
  }

  return highNumber;
}


console.log(gcd(4, 12));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1