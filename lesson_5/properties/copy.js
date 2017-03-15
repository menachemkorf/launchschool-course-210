function copyProperties(original, copy) {
  var count = 0;

  for (property in original) {
    copy[property] = original[property];
    count++;
  }

  return count;
}

var hal = {
  model: 9000,
  enabled: true,
};

var sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }