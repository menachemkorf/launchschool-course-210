function octalToDecimal(number) {
  var decimalParts = number.split('').map(function(digitChar, index) {
    return Number(digitChar) * Math.pow(8, number.length - index - 1);
  });

  return decimalParts.reduce(function(sum, currentNumber) {
    return sum + currentNumber;
  });
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9