// Funktion för att generera en kortlek
function generateDeck() {
  let suits = ["&hearts;", "&diams;", "&clubs;", "&spades;"];
  let ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  let deck = [];

  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      let suit = suits[i];
      let rank = ranks[j];
      let name;

      if (rank === 11) {
        name = "J";
      } else if (rank === 12) {
        name = "D";
      } else if (rank === 13) {
        name = "K";
      } else if (rank === 14) {
        name = "A";
      } else {
        name = rank.toString();
      }

      let card = {
        suit: suit,
        rank: rank,
        name: name,
      };

      deck.push(card);
    }
  }

  return deck;
}

// Funktion för att blanda kortleken
function shuffle(deck) {
  let shuffledDeck = [...deck];
  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
  }
  return shuffledDeck;
}

function displayCards(cards) {
  const container = document.getElementById("card-container");

  for (let card of cards) {
    const article = document.createElement("article");
    article.classList.add("card");

    const top = document.createElement("aside");
    top.classList.add("top", getSuitColorClass(card.suit));

    const h1 = document.createElement("h1");
    h1.textContent = card.name;

    const bottom = document.createElement("aside");
    bottom.classList.add("bottom", getSuitColorClass(card.suit));

    article.appendChild(top);
    article.appendChild(h1);
    article.appendChild(bottom);

    container.appendChild(article);
  }
}

function getSuitColorClass(suit) {
  if (suit === "&hearts;" || suit === "&diams;") {
    return "red";
  } else {
    return "black";
  }
}

// Generera en kortlek och blanda den
const deck = generateDeck();
const shuffledDeck = shuffle(deck);

// Visa korten i bodyn
displayCards(shuffledDeck);
