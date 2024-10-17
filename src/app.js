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

function createRandomCard() {
  let randomNumber = generateCardNumber();
  let randomSimbol = generateRandomSimbol();
  console.log(`randomNumber: ${randomNumber}`);
  console.log(`randomSimbol: ${randomSimbol}`);
}

function generateCardNumber() {
  let arrayNumbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];
  return arrayNumbers[generateRandomNumber(arrayNumbers.length)];
}

function generateRandomSimbol() {
  let arraySimbols = ["A", "J", "Q", "K"];
  return arraySimbols[generateRandomNumber(arraySimbols.length)];
}

function generateRandomNumber(arraySize) {
  return Math.floor(Math.random() * arraySize);
}
