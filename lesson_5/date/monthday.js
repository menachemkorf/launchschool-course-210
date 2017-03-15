var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
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

console.log("Today's day is " +
            daysOfWeek[today.getDay()] +
            ' the ' +
            dateSuffix(today.getDate()));