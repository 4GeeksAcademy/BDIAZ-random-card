/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  createRandomCard();
  let changeBoton = document.getElementById("changeBoton");
  changeBoton.addEventListener("click", function() {
    createRandomCard();
  });

  setInterval(createRandomCard, 10000);
};

function createRandomCard() {
  let randomNumber = generateCardNumber();
  let randomSimbol = generateRandomSimbol();
  let icons = document.querySelectorAll(".icon");
  let cardNumber = document.getElementById("number");
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
