const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");

const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;
let userScore = 0;
let computerScore = 0;

possibleChoices.forEach((possibleChoice) => {
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  });
});

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "scissors";
  } else if (randomNumber === 3) {
    computerChoice = "paper";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a Draw!";
  } else if (
    (computerChoice === "rock" && userChoice === "paper") ||
    (computerChoice === "paper" && userChoice === "scissors") ||
    (computerChoice === "scissors" && userChoice === "rock")
  ) {
    result = "You Win!";
    userScore++;
  } else {
    result = "You Lose!";
    computerScore++;
  }

  resultDisplay.innerHTML = result;
  userScoreDisplay.innerHTML = `User Score: ${userScore}`;
  computerScoreDisplay.innerHTML = `Computer Score: ${computerScore}`;
}
