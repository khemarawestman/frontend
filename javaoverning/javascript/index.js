/*function pokeMon(pokemon) {
  return new Promise((resolve, reject) => {
    if (pokemon === "pika pika") {
      resolve("pikechu");
    } else {
      reject(new Error("not a pikacho"));
    }
  });
}

pokeMon("pika")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error.message);
  });*/ x;
async function pokeMon(pokemon) {
  if (pokemon === "pika pika") {
    return "pikechu";
  } else {
    throw new Error("not a pikacho");
  }
}

async function pokeMonS() {
  try {
    const response = await pokeMon("pika");
    console.log(response);
  } catch (error) {
    console.error(error.message);
  }
}

pokeMonS();
