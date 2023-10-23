const buttons = document.querySelectorAll("button");
const screenDisplay = document.querySelector(".screen");
let caluation = [];
let sumCalculation;

function calculate(button) {
  const value = button.textContent;
  if (value == "CLEAR") {
    caluation = [];
    screenDisplay.textContent = ".";
  } else if (value == "=") {
    screenDisplay.textContent = eval(sumCalculation);
  } else {
    caluation.push(value);
    sumCalculation = caluation.join("");
    screenDisplay.textContent = sumCalculation;
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);
