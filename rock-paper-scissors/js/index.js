import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  where,
  updateDoc,
  increment,
  doc,
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9d6jM8KOZYjyq1gje0VH9vT1-Ttm_YOg",
  authDomain: "userlogin-ebfa7.firebaseapp.com",
  projectId: "userlogin-ebfa7",
  storageBucket: "userlogin-ebfa7.appspot.com",
  messagingSenderId: "312329728042",
  appId: "1:312329728042:web:b98c11e5b0f70549119353",
  measurementId: "G-2TK7PNBWK6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let userWeapon; //Här sparar vi valet som användaren gör
let computerWeapon; //Här sparar vi datorns val
let matches = 0;
let stats = {
  wins: 0,
  loses: 0,
  draws: 0,
};

const highscoreElem = document.querySelector("#highscore");

//Det gör här är att vi hämtar knappen och kör kod när användaren klickar på knappen.
document.getElementById("rock").addEventListener("click", function () {
  userWeapon = "sten";
  console.log(`Du har valt: ${userWeapon}`);
  getWinner();
});

document.getElementById("scissor").addEventListener("click", function () {
  userWeapon = "sax";
  console.log(`Du har valt: ${userWeapon}`);
  getWinner();
});

document.getElementById("paper").addEventListener("click", function () {
  userWeapon = "påse";
  console.log(`Du har valt: ${userWeapon}`);
  getWinner();
});

function resetGame() {
  matches = 0;
  stats = {
    wins: 0,
    loses: 0,
    draws: 0,
  };
}

function createHighscoreElement(highscore) {
  const textElem = document.createElement("p");
  textElem.innerText = `Användarnamn: ${highscore.username} - Vinster: ${highscore.wins} - Förluster: ${highscore.loses} - Draws: ${highscore.draws}`;
  highscoreElem.append(textElem);
}

async function getHighscore() {
  const highscoreList = await getDocs(collection(db, "highscore")); // Hämtar vi vår collection 'highscore'

  highscoreList.forEach((highscore) => {
    // Loopar igenom våran collection
    const score = highscore.data();
    //console.log(score);
    createHighscoreElement(score);
  });
}

getHighscore();

async function checkIfUsernameExists() {
  // Här bygger vi upp en fråga till vår databas, först bestämmer vi i vilken collection vi vill söka i collection(db, 'highscore')
  // Sen vad vi ska söka efter och detta fall efter ett specifikt användarnamn where('username', '==', username);
  // Till sist utför vi frågan mot databasen await getDocs(usernameQuery);

  const username = document.querySelector("#username").value;
  const usernameQuery = query(
    collection(db, "highscore"),
    where("username", "==", username)
  );
  const users = await getDocs(usernameQuery);

  let foundUser;
  users.forEach((user) => {
    console.log(user.id);
    console.log(user.data());
    foundUser = user;
  });

  return foundUser;
}

async function postHighscore() {
  stats.username = document.querySelector("#username").value;
  //console.log(stats);
  await addDoc(collection(db, "highscore"), stats);
}

async function updateHighscore(userId) {
  await updateDoc(doc(db, "highscore", userId), {
    // Anger vilket dokumentId som vi ska uppdatera
    wins: increment(stats.wins), // Addera nuvarande vinster med det som finns i databasen
    loses: increment(stats.loses),
    draws: increment(stats.draws),
  });
}

function showWinner(winner) {
  document.getElementById("winner").innerHTML = "Vinnare avgörs...";
  matches++;
  setTimeout(async () => {
    if (matches === 3) {
      document.getElementById("winner").innerHTML = `
                <p>Vinster: ${stats.wins}</p>
                <p>Förluster: ${stats.loses}</p>
                <p>Oavgjort: ${stats.draws}</p>
            `;
      const user = await checkIfUsernameExists();

      // Ifall användarnamnet redan finns så uppdatera annars skapa nytt dokument
      if (user) {
        // Update
        await updateHighscore(user.id);
      } else {
        await postHighscore();
      }

      resetGame();
    } else {
      document.getElementById("winner").innerHTML = winner;
    }
  }, 2000); // Kör denna funktion efter 2s
}

function getWinner() {
  computerWeapon = Math.round(Math.random() * 2); //Slumpa ett nummer mellan 0-2.

  if (computerWeapon == 0) {
    computerWeapon = "sten";
  } else if (computerWeapon == 1) {
    computerWeapon = "sax";
  } else if (computerWeapon == 2) {
    computerWeapon = "påse";
  }

  console.log(`Ditt vapen: ${userWeapon} Datorns vapen: ${computerWeapon}`);

  //Avgör vinnare. Kollar först om det blir blivit oavgjort annars vem som vann.
  if (userWeapon == computerWeapon) {
    stats.draws++;
    showWinner("Det blev oavgjort");
  } else if (userWeapon == "sten") {
    if (computerWeapon == "sax") {
      stats.wins++;
      showWinner("Du vann!");
    } else {
      stats.loses++;
      showWinner("Datorn vann!");
    }
  } else if (userWeapon == "sax") {
    if (computerWeapon == "påse") {
      stats.wins++;
      showWinner("Du vann!");
    } else {
      stats.loses++;
      showWinner("Datorn vann!");
    }
  } else if (userWeapon == "påse") {
    if (computerWeapon == "sten") {
      stats.wins++;
      showWinner("Du vann!");
    } else {
      stats.loses++;
      showWinner("Datorn vann!");
    }
  }
}
