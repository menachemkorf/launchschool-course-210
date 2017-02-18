function generatePattern(number) {
  var line;

  for (var i = 1; i <= number; i++) {
    line = '';
    for (var j = 1; j <= i; j++) {
      line += String(j);
    }


    for (var k = i + 1; k <= number; k++) {
      line += '*';
    }

    console.log(line);
  }
}



generatePattern(7);

// generatePattern(20);
