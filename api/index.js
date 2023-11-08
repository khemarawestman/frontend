/*function letsDance(danceStyle) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (danceStyle === "polka") {
        resolve("Yes, polka is my thing!");
      } else {
        reject(new Error("Sorry, I don't dance that style."));
      }
    }, 2000);
  });
}

letsDance("ben")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error.message);
  });

/*
async function letsDance(danceStyle) {
  if (danceStyle === "polka") {
    console.log("SMD");
  } else {
    console.log("KYS");
  }
}

letsDance("ben");
*/

/*let sectionElem = document.querySelector("section");

function renderPokemon(pokemons) {
  let allPokemons = "";

  for (let i = 0; i < pokemons.length; i++) {
    console.log(pokemons[i]);
    allPokemons = allPokemons + `<p>${pokemons[i].name}</p>`;
  }
  sectionElem.innerHTML = allPokemons;
}

async function getPokemon() {
  try {
    const response = await fetch(
      "https://majazocom.github.io/Data/pokemons.json"
    );
    const data = await response.json();
    console.log(data);
    renderPokemon(data);
  } catch {
    console.log("KYS");
  }
}

getPokemon();
*/

/* let sectionElem = document.querySelector("section");

function renderDogs(dogs) {
  let allDoggies = "";
  for (i = 0; i < dogs.length; i++) {
    console.log(dogs[i]);
    allDoggies = allDoggies + `<p>${dogs[i].name}</p>`;
  }
  sectionElem.innerHTML = allDoggies;
}

async function getDogs() {
  try {
    const doggy = await fetch("https://majazocom.github.io/Data/dogs.json");
    const data = await doggy.json();
    console.log(data);
    renderDogs(data);
  } catch {
    console.log("KYS");
  }
}

getDogs(); */

/*
let sectionElem = document.querySelector("section");

function renderBooks(books) {
  let library = "";

  for (let i = 0; i < books.length; i++) {
    if (books[i].pages <= 500) {
      library = library + `<p>${books[i].title}</p>`;
    }
  }
  sectionElem.innerHTML = library;
}

async function getBooks() {
  try {
    const acquireBooks = await fetch(
      "https://majazocom.github.io/Data/books.json"
    );
    const data = await acquireBooks.json();
    console.log(data);
    renderBooks(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

getBooks();
*/

let sectionElem = document.querySelector("section");

function checkStatus(attendees) {
  let status = "";
  for (i = 0; i < attendees.length; i++) {
    if (
      (attendees[i].attending = true && attendees[i].allergies.length === 0)
    ) {
      status =
        status +
        `<p>${attendees[i].name}</p>` +
        `<p>attending: ${attendees[i].attending}</p>`;
    }
    sectionElem.innerHTML = status;
  }
}

async function getWorkers() {
  try {
    let aquireWorkers = await fetch(
      "https://majazocom.github.io/Data/attendees.json"
    );
    data = await aquireWorkers.json();
    console.log(data);
    checkStatus(data);
  } catch {
    console.log("KYS");
  }
}

getWorkers();
