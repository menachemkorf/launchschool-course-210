var userName = prompt('What is your name?');

var greeting = 'Hello ' + userName + '.';

if (userName.endsWith('!')) {
  greeting = 'HELLO ' + userName.slice(0, -1).toUpperCase() + '. WHY ARE WE SCREAMING?'
}

console.log(greeting);