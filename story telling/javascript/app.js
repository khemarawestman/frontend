let storyText = document.getElementById("story-text");
let actionButton = document.getElementById("actionButton");
let noButton = document.getElementById("noButton");

let storyProgress = 0;

function continueStoryForYes() {
  actionButton.disabled = true;
  noButton.disabled = true;

  if (storyProgress === 0) {
    storyText.textContent =
      "This porridge is too hot! she exclaimed.So, she tasted the porridge from the second bowl.This porridge is too cold, she said." +
      "So, she tasted the last bowl of porridge.Ahhh, this porridge is just right, she said happily and she ate it all up.After she'd eaten the three bears' breakfasts, she decided she was feeling a little tired. So, she walked into the living room where she saw three chairs. Goldilocks sat in the first chair to rest.";
    storyProgress = 1;
  } else if (storyProgress === 1) {
    storyText.textContent =
      "So, she tasted the last bowl of porridge.Ahhh, this porridge is just right, she said happily " +
      "and she ate it all up.After she'd eaten the three bears' breakfasts, she decided she was feeling a little tired." +
      "So, she walked into the living room where she saw three chairs. Goldilocks sat in the first chair to rest.";
    storyProgress = 2;
  } else if (storyProgress === 2) {
    storyText.textContent =
      "This chair is too big! she exclaimed.So she sat in the second chair.This chair is too big, too!" +
      "she whined.So she tried the last and smallest chair.Ahhh, this chair is just right, she sighed. But just as she settled down into the chair to rest, it broke into pieces!";
    storyProgress = 3;
  } else {
    storyText.textContent = "They lived happily ever after." + "" + "";
    actionButton.style.display = "none";
  }
  setTimeout(function () {
    actionButton.disabled = false;
    noButton.disabled = false;
  }, 2000);
}

function endStoryForNo() {
  storyText.textContent = "The End.";
  actionButton.style.display = "none";
}

document.getElementById("noButton").addEventListener("click", function () {
  endStoryForNo();
});

actionButton.addEventListener("click", function () {
  continueStoryForYes();
});
