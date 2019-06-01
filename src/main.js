console.log('javascript has rendered');

//calculate time before my birthday
//Claculate age on page load
calculateAge();
//Calculate every second the time
setInterval(calculateAge, 1000);

function calculateAge() {
//Setting the actual date
let now = moment();
//Setting the date of my birthday
let birthday = moment("Aug/15","MMM/DD");
//Setting my birthday
let yearOfBirth = moment('1992');


//evaluating if my birthday was past or not
if(birthday.isBefore(now, 'days')){
  birthday= birthday.add(1, 'year');
  yearOfBirth = moment('1991')
} else {
  yearOfBirth = moment('1992')
}
//Calcukating the difference of time between now and my next birthday in days, years, hours, minutes, seconds
let diff = birthday.diff(now, 'days');
let diffYears = now.diff(yearOfBirth, 'year');
let diffHours = birthday.diff(now,'hours');
let diffMinutes = birthday.diff(now,'minutes');
let diffSec = birthday.diff(now, 'seconds');
//setting the span into a variable
let counter = document.getElementById('age');
//inserting the final text into the html span
counter.innerHTML = `I will turn ${diffYears} years old in ${diff} days || ${diffHours} hours || ${diffMinutes} minutes || ${diffSec} seconds.`;
};
