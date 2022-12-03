"use strict";

console.log("hey");

const cardNumberFront = document.getElementById("card-number");

const cardNameFront = document.getElementById("card-name");

const cardMonthFront = document.querySelector(".card-month");

const cardYearFront = document.querySelector(".card-year");

const backCVC = document.getElementById("back-cvc");

const inputCardName = document.getElementById("input-card-name");

const inputCardNumber = document.getElementById("input-card-number");

const inputMonth = document.getElementById("input-month");

const inputYear = document.getElementById("input-year");

const inputCVC = document.getElementById("input-cvc");

const btn = document.querySelector(".btn");

console.log(cardNumberFront);
console.log(cardNameFront);
console.log(backCVC);
console.log(inputCardName);
console.log(inputMonth);
console.log(inputYear);
console.log(inputCVC);
console.log(btn);
console.log(cardMonthFront);
console.log(cardYearFront);

//CODE

let verification = 0;

btn.addEventListener("click", function () {
  //CARD NAME
  if (inputCardName.value.length !== 0) {
    const cardName = inputCardName.value;
    cardNameFront.textContent = cardName.toUpperCase();
    document.querySelector(".number-text").classList.add("hidden");
    verification++;
    console.log(verification);
  } else {
    console.log("Error");
    inputCardName.style.outlineColor = "#FE556C";
  }
  //CARD NUMBER
  //Check if input field is blank or contains letters
  if (inputCardNumber.value.length !== 0 && inputCardNumber.value !== String) {
    const cardNumber = inputCardNumber.value;
    cardNumberFront.textContent = cardNumber;
    inputCardNumber.style.outlineColor = "#9ca3af";
    verification++;
    console.log(verification);
  } else {
    //Implement red outline
    console.log("Error");
    document.querySelector(".number-text").classList.remove("hidden");
    inputCardNumber.style.outlineColor = "#FE556C";
  }

  //MONTH
  if (inputMonth.value.length !== 0) {
    const cardMonth = inputMonth.value;
    cardMonthFront.textContent = cardMonth;
    inputMonth.style.outlineColor = "#9ca3af";
    document.querySelector(".month-text").classList.add("hidden");
    verification++;
    console.log(verification);
  } else {
    console.log("Error");
    document.querySelector(".month-text").classList.remove("hidden");
    inputMonth.style.outlineColor = "#FE556C";
  }

  //YEAR
  if (inputYear.value.length !== 0) {
    const cardYear = inputYear.value;
    cardYearFront.textContent = cardYear;
    inputYear.style.outlineColor = "#9ca3af";
    verification++;
    console.log(verification);
  } else {
    console.log("Error");
    document.querySelector(".month-text").classList.remove("hidden");
    inputYear.style.outlineColor = "#FE556C";
  }

  //CVC
  if (inputCVC.value.length !== 0) {
    const CVC = inputCVC.value;
    backCVC.textContent = CVC;
    inputCVC.style.outlineColor = "#9ca3af";
    verification++;
    console.log(verification);
  } else {
    console.log("Error");
    document.querySelector(".cvc-text").classList.remove("hidden");
    inputCVC.style.outlineColor = "#FE556C";
  }
});

// if ((verification = 5)) {
//   setTimeout(() => {
//     document.querySelector(".form-section ").classList.add("hidden");

//     document.querySelector(".complete-section").remove("hidden");
//   }, 5000);
// }
