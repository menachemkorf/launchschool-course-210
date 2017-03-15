function greetings(arr, obj) {
  var greeting = 'Hello, ' + arr.join(' ') + '! ';
  greeting += 'Nice to have a ' + obj.title + ' ' + obj.occupation + ' around.';
  return greeting;
}

console.log(greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' }));

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.