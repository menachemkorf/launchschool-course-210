function indexOf(firstString, secondString) {
  // find first letter of second string in first string
    // save index from first string
  // check if next letter of second string is same as next letter in first string
  // same till finish itirating over second string
    // return inndex
  // return -1
  var idx;

  for (var i = 0; i < firstString.length; i++) {
    idx = -1;
    if (secondString[0] === firstString[i]) {
      idx = i;
      for (var j = 1; j < secondString.length; j++) {
        if (firstString[i + j] !== secondString[j]) {
          idx = -1;
          break;
        }
      }

      if (idx >= 0) {
        return idx;
      }
    }
  }

  return idx;
}

function lastIndexOf(firstString, secondString) {

  var idx;

  for (var i = firstString.length; i >= 0; i--) {
    idx = -1;
    if (secondString[0] === firstString[i]) {
      idx = i;
      for (var j = 1; j < secondString.length; j++) {
        if (firstString[i + j] !== secondString[j]) {
          idx = -1;
          break;
        }
      }

      if (idx >= 0) {
        return idx;
      }
    }
  }

  return idx;
}



console.log(indexOf('Some strings', 's'));      // 5
console.log(indexOf('Blue Whale', 'Whale'));    // 5
console.log(indexOf('Blue Whale', 'Blute'));    // -1
console.log(indexOf('Blue Whale', 'leB'));      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1