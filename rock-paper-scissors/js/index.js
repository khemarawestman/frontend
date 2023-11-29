//Hämta användarens val

//Slumpa datorns val

//Avgör vinnare

//Visa vinnare
// Import the functions you need from the SDKs you need
/*import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
*/
let userWeapon; //Här sparar vi valet som användaren gör
let computerWeapon; //Här sparar vi datorns val
let matches = 0;
let stats = {
  wins: 0,
  loses: 0,
  draws: 0,
};

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

function showWinner(winner) {
  document.getElementById("winner").innerHTML = "Vinnare avgörs...";
  matches++;
  setTimeout(() => {
    if (matches === 3) {
      document.getElementById("winner").innerHTML = `
                <p>Vinster: ${stats.wins}</p>
                <p>Förluster: ${stats.loses}</p>
                <p>Oavgjort: ${stats.draws}</p>
            `;

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
