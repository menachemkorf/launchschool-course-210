function isBalanced(str) {
  var parensCount = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      parensCount += 1;
    } else if (str[i] === ')') {
      parensCount -= 1;
    }

    if (parensCount < 0) {
      return false;
    }
  }

  return parensCount === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false