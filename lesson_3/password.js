var password = 'password';
var login = false;

for (i = 0; i < 3; i++) {
  var guess = prompt('What is the password:');
  if (guess === password) {
    login = true;
    break;
  }
}

if (login) {
  console.log('You have successfully logged in.');
} else {
  console.log('You have been denied access.')
}