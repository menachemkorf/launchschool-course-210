var today = new Date;

function dateSuffix(date) {
  var dateString = String(date);
  var suffix = 'th';

  if (Math.floor(date / 10) === 1) {
    return dateString + suffix;
  }

  if (date % 10 === 1) {
    suffix = 'st';
  } else if (date % 10 === 2) {
    suffix = 'nd';
  } else if (date % 10 === 3) {
    suffix = 'rd';
  }
  return dateString + suffix;
}

function formattedDay(date) {
  var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[date.getDay()];
}

function formattedMonth(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[date.getMonth()];
}

function formattedDate(date) {
  var day = formattedDay(date);
  var month = formattedMonth(date);

  console.log("Today's day is " + day + ', ' + month + ' ' + dateSuffix(today.getDate()));
}

// console.log("Today's day is " +
//             daysOfWeek[today.getDay()] + ', ' +
//             months[today.getMonth()] + ' ' +
//             dateSuffix(today.getDate()));

formattedDate(today);

