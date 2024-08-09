// Date objects = Objects that contain values that represent dates and times
//                These date objects can be changed and formatted

// Date(year, month, day, hours, minutes, seconds, ms)
const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const dayOfWeek = date.getDay();

// date.setFullYear(year, month, day);

console.log(year);
console.log(month);
console.log(day);
console.log(hours);
console.log(minutes);
console.log(dayOfWeek);
