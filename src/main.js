console.log('javascript has rendered');

//Function for making the cards go out from the wallet and display properly

let card =  document.getElementById("beforeClick");
let card1 =  document.getElementById("beforeClick1");
let card2 =  document.getElementById("beforeClick2");
let card3 =  document.getElementById("beforeClick3");
let cardsGroup = document.getElementById("beforeClickMain");

function walletOut(){
//Making the cards appear
card.classList.add("cards__animation");
card1.classList.add("cards__animation"); 
card2.classList.add("cards__animation"); 
card3.classList.add("cards__animation"); 
//displaying the cards in grid
cardsGroup.classList.add("cards__grid");

//Making the buttons appear
    document.getElementById("btn").style.visibility = "visible";
    document.getElementById("btn").style.display = "block";

    document.getElementById("btn1").style.visibility = "visible";
    document.getElementById("btn1").style.display = "block";

    document.getElementById("btn2").style.visibility = "visible";
    document.getElementById("btn2").style.display = "block";

    document.getElementById("btn3").style.visibility = "visible";
    document.getElementById("btn3").style.display = "block";

    console.log('click');
}

//Putting the cards back in the wallet
function closeCards() {
//removing the classes added in the function walletOut()
card.classList.remove("cards__animation");
card1.classList.remove("cards__animation"); 
card2.classList.remove("cards__animation"); 
card3.classList.remove("cards__animation"); 

//Preventing the animation of the cards to overlap the popup window
card.style.visibility = "hidden";
card.style.display = "none";
card1.style.visibility = "hidden";
card1.style.display = "none";
card2.style.visibility = "hidden";
card2.style.display = "none";
card3.style.visibility = "hidden";
card3.style.display = "none";

//Removing the grid class
cardsGroup.classList.remove("cards__grid");

//Removing the socials from the page while the pop up is open
document.getElementById("gitPic").style.display = "none";
document.getElementById("gitPic").style.visibility = "hidden";
document.getElementById("linPic").style.display = "none";
document.getElementById("linPic").style.display = "hidden";

//Preventing the wallet to overlap the popup during animation
document.getElementById("fullWallet").style.display = "none";
document.getElementById("fullWallet").style.visibility = "hidden";


//Hiding the buttons
document.getElementById("btn").style.visibility = "hidden";
document.getElementById("btn").style.display = "none";

document.getElementById("btn1").style.visibility = "hidden";
document.getElementById("btn1").style.display = "none";

document.getElementById("btn2").style.visibility = "hidden";
document.getElementById("btn2").style.display = "none";

document.getElementById("btn3").style.visibility = "hidden";
document.getElementById("btn3").style.display = "none";
}

let popup1 = document.getElementById("popupFirst");
let popup1Up = document.getElementById("popupFirstUp");
let popup1Dark = document.getElementById("darknessClose");

//Opening the  popups
function openPopUpAbout() {
  popup1.classList.add ("popup__first");
  popup1Up.classList.add("popup__first--up");
  popup1Dark.classList.add("darkness");

//Making the text visible
document.getElementById("h1About").style.visibility = "visible";
document.getElementById("h1About").style.display = "initial";
document.getElementById("spanAbout").style.visibility = "visible";
document.getElementById("spanAbout").style.display = "inherit";
  console.log("click2");
}
//Showing the popup my creations
let popup2 = document.getElementById("popupSecond");
let popup4 = document.getElementById("popupFourth");

//Closing the cards
function closePopup() {

//Making the popup1 dissapear
  popup1.classList.remove ("popup__first");
  popup1Up.classList.remove("popup__first--up");
  popup2.classList.remove("popupSecond__second");
  popup1Dark.classList.remove("darkness");

//Making the text disappear
document.getElementById("h1About").style.visibility = "hidden";
document.getElementById("h1About").style.display = "none";
document.getElementById("spanAbout").style.visibility = "hidden";
document.getElementById("spanAbout").style.display = "none";

//Adding the classes added in the function walletOut()
card.classList.add("cards__animation");
card1.classList.add("cards__animation"); 
card2.classList.add("cards__animation"); 
card3.classList.add("cards__animation"); 

//Preventing the animation of the cards to overlap the popup window
card.style.visibility = "visible";
card.style.display = "initial";
card1.style.visibility = "visible";
card1.style.display = "initial";
card2.style.visibility = "visible";
card2.style.display = "initial";
card3.style.visibility = "visible";
card3.style.display = "initial";

//re-showing the wallet to overlap the popup during animation
document.getElementById("fullWallet").style.display = "initial";
document.getElementById("fullWallet").style.visibility = "visible";


//re-showing the buttons
document.getElementById("btn").style.visibility = "visible";
document.getElementById("btn").style.display = "block";

document.getElementById("btn1").style.visibility = "visible";
document.getElementById("btn1").style.display = "block";

document.getElementById("btn2").style.visibility = "visible";
document.getElementById("btn2").style.display = "block";

document.getElementById("btn3").style.visibility = "visible";
document.getElementById("btn3").style.display = "block";

//re-inserting the grid class
cardsGroup.classList.add("cards__grid");

//re-showinig socials
document.getElementById("gitPic").style.visibility = "visible";
document.getElementById("gitPic").style.display = "block";
document.getElementById("linPic").style.visibility = "visible";
document.getElementById("linPic").style.display = "block";

//hiding the popup2
document.getElementById("popupSecond__first").style.display = "none";
document.getElementById("popupSecond__first").style.visibility = "hidden";

document.querySelector(".popupSecond__class2").style.display = "none";
document.querySelector(".popupSecond__class2").style.visibility = "hidden";

document.querySelector(".popupSecond__class3").style.display = "none";
document.querySelector(".popupSecond__class3").style.visibility = "hidden";

document.querySelector(".popupSecond__class4").style.display = "none";
document.querySelector(".popupSecond__class4").style.visibility = "hidden";

document.querySelector(".popupSecond__class5").style.display = "none";
document.querySelector(".popupSecond__class5").style.visibility = "hidden";

document.querySelector(".popupSecond__class6").style.display = "none";
document.querySelector(".popupSecond__class6").style.visibility = "hidden";

//Hiding popup 4
popup4.classList.remove("popup__fourth");

//Making the other elements disappear
  document.querySelector(".popupSecond__fourth--up").style.visibility = "hidden";
  document.querySelector(".popupSecond__fourth--up").style.display = "none";

  document.querySelector(".popupSecond__fourth--down").style.visibility = "hidden";
  document.querySelector(".popupSecond__fourth--down").style.display = "none";

}


//Opening popup2
function openPopUpMyProjects() {
//making the popup appear
popup2.classList.add("popupSecond__second");

//Displaying it in grid
document.getElementById("popupSecond__first").style.display = "inline-grid";
document.getElementById("popupSecond__first").style.visibility = "visible";

//Making everything visible
document.querySelector(".popupSecond__class2").style.display = "inline-grid";
document.querySelector(".popupSecond__class2").style.visibility = "visible";

document.querySelector(".popupSecond__class3").style.display = "inline-grid";
document.querySelector(".popupSecond__class3").style.visibility = "visible";

document.querySelector(".popupSecond__class4").style.display = "inline-grid";
document.querySelector(".popupSecond__class4").style.visibility = "visible";

document.querySelector(".popupSecond__class5").style.display = "inline-grid";
document.querySelector(".popupSecond__class5").style.visibility = "visible";

document.querySelector(".popupSecond__class6").style.display = "inline-grid";
document.querySelector(".popupSecond__class6").style.visibility = "visible";
//Adding the black background
popup1Dark.classList.add("darkness");

}

//Changing the text in the popup 2 when there is a size with max-width of 1200px
function mediaChange(mediaSize){
if(mediaSize.matches) {
  document.getElementById("projectTextP1").innerHTML = "Dice multiplayer game developed with javascript, get 100 points and win";
  document.getElementById("projectTextP2").innerHTML = "Website developed using SCSS, purely focused on the UI";
  document.getElementById("projectTextP3").innerHTML = "Weather forecast website developed using Node.JS";
  document.getElementById("projectTextP6").innerHTML = "Memory game developed using JavaScript";
  document.getElementById("projectTextP5").innerHTML = "Visit my GitHub";
  
} else {
 document.getElementById("projectTextP1").innerHTML = "Dice game developed using JavaScript. The game consists in rolling the dices and holding the points before you get a one, which will make you lose all the points accumulated. The first to reach 100 points wins (Only for desktop)"
}
}
//Declaring the variable 1200px
let largeMedia = window.matchMedia("(max-width: 1200px)");

//Inserting the variable in the function
mediaChange(largeMedia);
largeMedia.addListener(mediaChange);

//Opening the pop4
function openPopupContactMe() {

//Making the popup appear
  popup4.classList.add("popup__fourth");

//Making the other elements appear 
  document.querySelector(".popupSecond__fourth--up").style.visibility = "visible";
  document.querySelector(".popupSecond__fourth--up").style.display = "block";

  document.querySelector(".popupSecond__fourth--down").style.visibility = "visible";
  document.querySelector(".popupSecond__fourth--down").style.display = "inline-grid";

  document.getElementById("popup4__img--1").style.display = "block";
  document.getElementById("popup4__img--1").style.visibility = "visible";

  document.getElementById("popup4__img--2").style.display = "block";
  document.getElementById("popup4__img--2").style.visibility = "visible";

  document.getElementById("popup4__img--3").style.display = "block";
  document.getElementById("popup4__img--3").style.visibility = "visible";

  document.getElementById("popup4__img--4").style.display = "block";
  document.getElementById("popup4__img--4").style.visibility = "visible";

//Adding the black background
popup1Dark.classList.add("darkness");
}

//Changing adding the classes for the mobile version
function phoneChange(mobileSize){
  if(mobileSize.matches) {
    openPopUpAbout();
    openPopUpMyProjects();
    openPopupContactMe();
    closeCards();
    popup1Dark.classList.remove("darkness");
  }
  }
  
  //Declaring the variable 600px
  let phoneMedia = window.matchMedia("(max-width: 600px)");
  
  //Inserting the variable in the function
  phoneChange(phoneMedia);
  phoneMedia.addListener(phoneChange);

//Changing adding the classes for the mobile version
function tabChange(tabSize){
  if(tabSize.matches) {
    closePopup();
  }
  }
  
  //Declaring the variable 600px
  let tabMedia = window.matchMedia("(max-height: 400px)");
  
  //Inserting the variable in the function
  tabChange(tabMedia);
  tabMedia.addListener(tabChange);

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
