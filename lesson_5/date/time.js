function formatTime(date) {
  return addZero(String(date.getHours())) + ':' + String(date.getMinutes())
}

function addZero(str) {
  if (str.length < 2) {
    return '0' + str;
  } else {
    return str;
  }
}

var today = new Date;

console.log(formatTime(today));