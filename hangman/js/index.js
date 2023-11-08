let words = ["banan", "äppelpaj", "skruvmejsel", "potatismos", "korvkiosk"];
const bodyElem = document.querySelector("body");
let wrongGuessCount = 0;
let correctGuesses = [];

let randomPosition = Math.floor(Math.random() * words.length);
const selectedWord = words[randomPosition];
console.log(selectedWord);

const letters = selectedWord.split("");
console.log(letters);

let wordDisplay = document.getElementById("wordDisplay");
let blanks = "_".repeat(letters.length);
function checkGameOver() {
  if (wrongGuessCount === 5) {
    document.querySelector("#game-over-message").style.display = "block";
  }
}
function updateWordDisplay() {
  wordDisplay.innerHTML = "";

  for (let i = 0; i < blanks.length; i++) {
    let letterBox = document.createElement("div");
    letterBox.classList.add("letterBox");

    if (correctGuesses.some((guess) => guess.position === i)) {
      letterBox.textContent = letters[i];
    } else {
      letterBox.textContent = blanks[i];
    }

    wordDisplay.appendChild(letterBox);
  }
}

bodyElem.addEventListener("keyup", (event) => {
  console.log("Du klickade på: ", event.key);
  checkGameOver();
  let letterGuessed = false;

  for (let i = 0; i < letters.length; i++) {
    if (event.key === letters[i]) {
      letterGuessed = true;
      correctGuesses.push({ letter: event.key, position: i });
    }
  }

  if (letterGuessed) {
    console.log("Correct guess!");
    console.log("Correct guesses:", correctGuesses);

    updateWordDisplay();
  } else {
    console.log("Wrong guess!");

    wrongGuessCount++;

    if (wrongGuessCount === 1) {
      document.querySelector("figure").classList.add("scaffold");
    } else if (wrongGuessCount === 2) {
      document.querySelector("figure").classList.add("head");
    } else if (wrongGuessCount === 3) {
      document.querySelector("figure").classList.add("body");
    } else if (wrongGuessCount === 4) {
      document.querySelector("figure").classList.add("arms");
    } else if (wrongGuessCount === 5) {
      document.querySelector("figure").classList.add("legs");
      window.alert("Game Over! You've run out of guesses.");
    }
  }
});

updateWordDisplay();
