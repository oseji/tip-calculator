"use strict";

//buttons
const five = document.getElementById("five");
const ten = document.getElementById("ten");
const fifteen = document.getElementById("fifteen");
const twentyFive = document.getElementById("twenty-five");
const fifty = document.getElementById("fifty");
const custom = document.querySelector(".custom-input");
const customInput = document.querySelector(".custom-input");
const reset = document.getElementById("reset");

const tipAmount = document.querySelector("#tip-amount");
const tipTotal = document.querySelector("#tip-total");

//numbers
const fiveValue = (five.value = 5);
const tenValue = (ten.value = 10);
const fifteenValue = (fifteen.value = 15);
const twentyFiveValue = (twentyFive.value = 25);
const fiftyValue = (fifty.value = 50);
const customValue = customInput.value;

//input
const billValue = document.getElementById("bill-value");

const numberOfPeople = document.getElementById("number-people");

//CODE

let tip;
const btnNumber = document.querySelectorAll(".btn-number");

//NUMBER CALCULATIONS
btnNumber.forEach(function (i) {
  i.addEventListener("click", function () {
    tip = i.value / 100;

    const value = Number(billValue.value);
    const people = Number(numberOfPeople.value);
    const tipPerPerson = (value * tip) / people;

    tipAmount.textContent = `$${tipPerPerson.toFixed(2)}`;

    const totalPerPerson = value / people + tipPerPerson;

    tipTotal.textContent = `$${totalPerPerson.toFixed(2)}`;
  });
});

//CUSTOM CALCULATION
custom.addEventListener("keypress", function (e) {
  e.preventDefault;
  if (e.key === "Enter") {
    tip = custom.value / 100;
    const value = Number(billValue.value);
    const people = Number(numberOfPeople.value);
    const tipPerPerson = (value * tip) / people;

    tipAmount.textContent = `$${tipPerPerson.toFixed(2)}`;

    const totalPerPerson = value / people + tipPerPerson;

    tipTotal.textContent = `$${totalPerPerson.toFixed(2)}`;
  }
});

//RESET DISPLAY
reset.addEventListener("click", function () {
  tipAmount.textContent = "$0.00";
  tipTotal.textContent = "$0.00";
  billValue.value = "";
  numberOfPeople.value = "";
  custom.value = "";
});
