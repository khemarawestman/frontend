// Get references to HTML elements
const taskForm = document.getElementById("taskForm");
const newTaskInput = document.getElementById("newTask");
const taskList = document.getElementById("taskList");

// Initialize the tasks array
let tasks = [];

// Function to display tasks
function displayTasks() {
  // Clear the existing list
  taskList.innerHTML = "";

  // Iterate through tasks array and create list items
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    // Add a delete button to each task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      tasks.splice(index, 1);
      displayTasks();
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}

// Event listener to add a new task
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newTask = newTaskInput.value.trim();
  if (newTask !== "") {
    tasks.push(newTask);
    newTaskInput.value = "";
    displayTasks();
  }
});
