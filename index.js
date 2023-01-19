"use strict";

const btnNumber = document.querySelectorAll(".number-button");
console.log(btnNumber);

const outputDisplay = document.querySelector(".output-display");

//numbers
const zero = document.getElementById("zero").textContent;
const one = document.getElementById("one").textContent;
const two = document.getElementById("two").textContent;
const three = document.getElementById("three").textContent;
const four = document.getElementById("four").textContent;
const five = document.getElementById("five").textContent;
const six = document.getElementById("six").textContent;
const seven = document.getElementById("seven").textContent;
const eight = document.getElementById("eight").textContent;
const nine = document.getElementById("nine").textContent;

//symbols
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const decimalPoint = document.getElementById("decimal-point");

const reset = document.getElementById("reset");
const equals = document.getElementById("nine");

console.log(eight);

btnNumber.forEach(function (i) {
  i.addEventListener("click", function (e) {
    e.preventDefault();

    let currentNum = Number(i.textContent);
    outputDisplay.textContent = currentNum;

    console.log(currentNum);
  });
});
