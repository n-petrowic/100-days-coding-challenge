"use strict";

const display = document.getElementById("display");

function appendToDisplay(input) {
  // appends selected button to display
  display.value += input;
}

function clearDisplay() {
  // clears display when 'C' button is clicked
  display.value = "";
}

function backspace() {
  // removes last character from display when 'DEL' button is clicked
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
