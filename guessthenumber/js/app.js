document.getElementById("guessSubmit").addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  let buttonYes = document.getElementById("yes");
  let buttonNo = document.getElementById("no");
  let userGuessed = parseInt(document.getElementById("guessField").value);

  if (userGuessed === randomNumber) {
    alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT!");
    console.log(userGuessed + randomNumber);
  } else if (userGuessed < randomNumber) {
    alert("Too low! Try a higher number.");
    console.log(userGuessed + randomNumber);
  } else {
    alert("Too high! Try a lower number.");
    console.log(userGuessed + randomNumber);
  }
});
