/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  createRandomCard();
};

/*
class="fa-solid fa-heart icon" -rojo
class="fa-solid fa-diamond"
<i class="fa-solid fa-clover"></i>
<i class="fa-solid fa-spa"></i>*/

function createRandomCard() {
  let randomNumber = generateCardNumber();
  let randomSimbol = generateRandomSimbol();
  let icons = document.querySelectorAll(".icon");
  let cardNumber = document.getElementById("number");
  console.log(icons);
  icons.forEach(icon => {
    icon.className = `fa-solid fa-${randomSimbol} icon`;
  });
  cardNumber.innerHTML = randomNumber;
}

function generateCardNumber() {
  let arrayNumbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  return arrayNumbers[generateRandomNumber(arrayNumbers.length)];
}

function generateRandomSimbol() {
  let arraySimbols = ["diamond", "clover", "heart", "spa"];
  return arraySimbols[generateRandomNumber(arraySimbols.length)];
}

function generateRandomNumber(arraySize) {
  return Math.floor(Math.random() * arraySize);
}
