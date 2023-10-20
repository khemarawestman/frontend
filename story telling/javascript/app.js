let storyText = document.getElementById("story-text");
let actionButton = document.getElementById("actionButton");
let noButton = document.getElementById("noButton");

let storyProgress = 0;
function StoryYes() {
  if (storyProgress === 0) {
    storyText.textContent = "hej och hå";
    storyProgress = 1;
  }
}
document.getElementById("noButton").addEventListener("click", function () {
  endStoryForNo();
});

actionButton.addEventListener("click", function () {
  StoryYes();
});
