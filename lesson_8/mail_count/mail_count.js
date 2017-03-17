function mailCount(emailData) {
  var emails = emailData.split('##||##').map(function(email) {
    return email.split('#/#');
  });

  var dates = emails.map(function(email) {
    return email[2].slice(-10).split('-');
  }).map(function(date) {
    return new Date(Number(date[2]), Number(date[0]) - 1, Number(date[1]));
  });

  dates.sort(function(a, b) {
    return a > b;
  });

  var dateStrings = dates.map(function(date) {
    return date.toString().slice(0, 15);
  });

  console.log('Count of Email: ' + emails.length);
  console.log('Date Range: ' + dateStrings[0] + ' - ' + dateStrings[emails.length - 1]);
}

mailCount(emailData);

// console.output
// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016