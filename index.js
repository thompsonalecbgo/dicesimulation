function shakeDice() {
  var dice1Num = Math.floor(Math.random() * 6) + 1;
  var dice2Num = Math.floor(Math.random() * 6) + 1;
  var dice3Num = Math.floor(Math.random() * 6) + 1;
  var dice4Num = Math.floor(Math.random() * 6) + 1;
  var dice5Num = Math.floor(Math.random() * 6) + 1;
  var dice6Num = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".dice-img1").src = "images/dice" + dice1Num + ".png";
  document.querySelector(".dice-img2").src = "images/dice" + dice2Num + ".png";
  document.querySelector(".dice-img3").src = "images/dice" + dice3Num + ".png";
  document.querySelector(".dice-img4").src = "images/dice" + dice4Num + ".png";
  document.querySelector(".dice-img5").src = "images/dice" + dice5Num + ".png";
  document.querySelector(".dice-img6").src = "images/dice" + dice6Num + ".png";
}

function toggleButton() {
  var x = document.querySelector("input");
  if (x.value === "shake dice") {
    x.value = "roll dice";
    diceAnimation = setInterval(shakeDice, 50);
    diceAnimation;
  } else {
    x.value = "shake dice";
    clearInterval(diceAnimation);
  }
}

// var dices = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
//
// function randomDice() {
//   var i = Math.floor(Math.random() * dices.length);
//   var dice = dices[i];
//   // return document.querySelector("h1").innerHTML = name;
// }
//
// var dice1 = randomDice();
// var dice2 = randomDice();
// var dice3 = randomDice();
// var dice4 = randomDice();
// var dice5 = randomDice();
// var dice6 = randomDice();
//
// function diceGame() {
//
// }
//
// function toggleButton() {
//   var x = document.querySelector("input");
//   if (x.value === "shake dice") {
//     x.value = "roll dice";
//     myVar = setInterval(randomName, 50);
//     myVar;
//   } else {
//     x.value = "shake dice";
//     clearInterval(myVar);
//   }
// }
//
// function randomInt(i) {
//   return Math.floor(Math.random()*i) + 1;
// }
//
// document.querySelector(".dice-img1").src = "images/dice" + dice1 + ".png";
// document.querySelector(".dice-img2").src = "images/dice" + dice2 + ".png";
// document.querySelector(".dice-img3").src = "images/dice" + dice3 + ".png";
// document.querySelector(".dice-img4").src = "images/dice" + randomNumber4 + ".png";
// document.querySelector(".dice-img5").src = "images/dice" + randomNumber5 + ".png";
// document.querySelector(".dice-img6").src = "images/dice" + randomNumber6 + ".png";
//
// // if (randomNumber1 === randomNumber2) {
// //   document.querySelector("h1").innerHTML = "Draw!";
// // } else if (randomNumber1 > randomNumber2) {
// //   document.querySelector("h1").innerHTML = "Player 1 Wins!";
// // } else if (randomNumber2 > randomNumber1) {
// //   document.querySelector("h1").innerHTML = "Player 2 Wins!";
// // } else {
// //
// // }
