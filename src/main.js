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
//Calcuating the difference of time between now and my next birthday in days, years, hours, minutes, seconds
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

//Function for making the cards go out from the wallet and display properly

function walletOut(){
//Making the cards appear
    document.getElementById("beforeClick").id = "cards__animation";
    document.getElementById("beforeClick1").id = "cards__animation";     
    document.getElementById("beforeClick2").id = "cards__animation";     
    document.getElementById("beforeClick3").id = "cards__animation"; 
    
    document.getElementById("beforeClickMain").id = "cards__grid";
//Making the buttons appear
    document.getElementById("btn").style.visibility = "visible";
    document.getElementById("btn").style.display = "block";

    document.getElementById("btn1").style.visibility = "visible";
    document.getElementById("btn1").style.display = "block";

    document.getElementById("btn2").style.visibility = "visible";
    document.getElementById("btn2").style.display = "block";

    document.getElementById("btn3").style.visibility = "visible";
    document.getElementById("btn3").style.display = "block";
//Centering the text
    document.getElementById("beforeClickText").id = "text_margin";
    document.getElementById("beforeClickText1").id = "text_margin";
    document.getElementById("beforeClickText2").id = "text_margin";
    document.getElementById("beforeClickText3").id = "text_margin";


    console.log('click');
}

