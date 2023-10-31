let button = document.querySelector("button");
let insultDisplay = document.querySelector("#insult-display");
let playDisplay = document.querySelector("#play");
let allinsults = function removeRandom(insults, index) {
  insults.splice(index, 1);
};

button.addEventListener("click", function () {
  let generateNumber = Math.floor(Math.random() * insults.length);
  let randomInsult = insults[generateNumber];
  insultDisplay.textContent = randomInsult.insult;
  playDisplay.textContent = randomInsult.play;
  console.log(insults);
  removeRandom(insults, generateNumber);
  console.log(generateNumber);
  console.log(insults);
});

let insults = [
  {
    insult: "Never hung poison on a fouler toad",
    play: "Richard III",
  },
  {
    insult: "He thinks too much: such men are dangerous.",
    play: "Julius Ceasar",
  },
  {
    insult:
      "Thou calledst me a dog before thou hadst a cause. But since I am a dog, beware my fangs.",
    play: "The Merchant of Venice",
  },
  {
    insult: "Give me your hand...I can tell your fortune. You are a fool.",
    play: "The Two Noble Kinsmen",
  },
  {
    insult:
      "He smells like a fish, a very ancient and fish-like smell, a kind of not-of-the-newest poor-John. A strange fish! ",
    play: "The Tempest",
  },
];
