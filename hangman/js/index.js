let words = ["banan", "äppelpaj", "skruvmejsel", "potatismos", "korvkiosk"];
const bodyElem = document.querySelector("body");
let wrongGuessCount = 0;

let randomPosition = Math.floor(Math.random() * words.length);
const selectedWord = words[randomPosition];
console.log(selectedWord);

const letters = selectedWord.split("");
console.log(letters);

bodyElem.addEventListener("keyup", (event) => {
  console.log("Du klickade på: ", event.key);

  let letterGuessed = false; // Declare letterGuessed here

  for (let i = 0; i < letters.length; i++) {
    if (event.key === letters[i]) {
      letterGuessed = true;
    }
  }

  if (letterGuessed) {
    // Logic for when the letter is guessed correctly
    console.log("Correct guess!");
  } else {
    // Logic for when the letter is not guessed correctly
    console.log("Wrong guess!");

    wrongGuessCount++;

    if (wrongGuessCount === 1) {
      document.querySelector("figure").classList.add("head");
    } else if (wrongGuessCount === 2) {
      document.querySelector("figure").classList.add("body");
    } else if (wrongGuessCount === 3) {
      document.querySelector("figure").classList.add("arms");
    } else if (wrongGuessCount === 4) {
      document.querySelector("figure").classList.add("legs");
    } else if (wrongGuessCount === 5) {
      document.querySelector("figure").classList.add("scaffold");
    }
  }
});
