/**
 * 1. Lägga på en eventlistener på en knapp
 * 2. När jag klickar på en knapp hämta värde från inputfält och spara i en variabel
 * 3. Spara värdet från inputfält i en array
 * 4. Visa array:en
 */
const inputElem = document.querySelector("input");
const buttonElem = document.querySelector("button");
const todoElem = document.querySelector("p");
const todosElem = document.querySelector("ul");

const todos = ["Köp kaffe", "Köp kaka", "Brygg kaffe", "Drick kaffe"]; // Deklarerar en array

function displayTodos() {
  let todoItems = "";

  for (let i = 0; i < todos.length; i++) {
    //console.log(todos[i]);
    todoItems = todoItems + "<li>" + todos[i] + "</li>";
    console.log(todoItems);
    todosElem.innerHTML = todoItems;
  }
}

buttonElem.addEventListener("click", () => {
  const todo = inputElem.value;

  todos.push(todo);
  console.log(todos);

  const lastPosition = todos[todos.length - 1];
  //console.log(lastPosition);
  const index = todos.indexOf("Brygg kaffe");
  console.log(todos[index]);

  todoElem.innerHTML = "Du la till: " + lastPosition;

  displayTodos();
});
