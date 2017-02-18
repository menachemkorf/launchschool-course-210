var score1 = Number(prompt('Enter score 1'));
var score2 = Number(prompt('Enter score 2'));
var score3 = Number(prompt('Enter score 3'));

function gradeScore(score1, score2, score3) {
  var average = (score1 + score2 + score3) / 3;
  if (average >= 90) {
    return 'A';
  } else if (average >= 70) {
    return 'B';
  } else if (average >= 50) {
    return 'C';
  } else {
    return 'F';
  }
}


console.log(gradeScore(score1, score2, score3));