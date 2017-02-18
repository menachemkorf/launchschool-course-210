function logOddNumbers(limit) {
  for (var i = 1; i <= limit; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

logOddNumbers(19);
