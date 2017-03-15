var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  var scoreData = Object.keys(scores).map(function(student) {
    return studentScores[student].scores;
  });

  var examData = scoreData.map(function(score) {
    return score.exams;
  });

  return {
    studentGrades: scoreData.map(getStudentGrades),
    exams: getExamSummary(examData),
  };
}

function getStudentGrades(scoreObj) {
  var letter;
  var examScore = scoreObj.exams.reduce(function(sum, currentScore) {
    return sum + currentScore;
  }) / scoreObj.exams.length;

  var exerciseScore = scoreObj.exercises.reduce(function(sum, currentScore) {
    return sum + currentScore;
  });

  var totalScore = Math.round((examScore * 0.65) + (exerciseScore * 0.35));

  if (totalScore >= 93) {
    letter = '(A)';
  } else if (totalScore >= 85) {
    letter = '(B)';
  } else if (totalScore >= 77) {
    letter = '(C)';
  } else if (totalScore >= 69) {
    letter = '(D)';
  } else if (totalScore >= 60) {
    letter = '(E)';
  } else {
    letter = '(F)';
  }

  return totalScore + ' ' + letter;
}

function getExamSummary(examData) {
  var dividedExamData = divideExamData(examData);
  return dividedExamData.map(getIndividualExamSummary);
}

function divideExamData(examData) {
  var individualExamData = [];

  examData[0].forEach(function(exam) {
    individualExamData.push([]);
  });

  for (var i = 0; i < examData[0].length; i++) {
    for (var j = 0; j < examData.length; j++) {
      individualExamData[i].push(examData[j][i]);
    }
  }

  return individualExamData;
}

function getIndividualExamSummary(examData) {
  return {
    average: Math.round((examData.reduce(function(sum, currentScore) {
          return sum + currentScore;
        }) / examData.length) * 10) / 10,
    minimum: examData.reduce(function(previousMin, currentScore) {
      return Math.min(previousMin, currentScore);
    }),
    maximum: examData.reduce(function(previousMax, currentScore) {
      return Math.max(previousMax, currentScore);
    }),
  };
}

console.log(generateClassRecordSummary(studentScores));

// returns:

// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }