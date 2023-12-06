import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_g9OJHHFR5OkyKy4YCird6ujr_jiSB9c",
  authDomain: "bookshop-7e61c.firebaseapp.com",
  projectId: "bookshop-7e61c",
  storageBucket: "bookshop-7e61c.appspot.com",
  messagingSenderId: "712677729399",
  appId: "1:712677729399:web:441f0ab4f1c9418a11d272",
  measurementId: "G-WC6V3MGJ2M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let shoppingCart = [];

// Function to save cart item to Firebase
async function saveCartItemToFirebase(cartItem) {
  try {
    const docRef = await addDoc(collection(db, "Kundvagn"), cartItem);
    console.log("Item added to Firebase with ID: ", docRef.id);
    return docRef.id; // Return the new document's ID
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

// Function to delete cart item from Firebase
async function deleteCartItemFromFirebase(cartItemId) {
  try {
    await deleteDoc(doc(db, "Kundvagn", cartItemId));
    console.log("Item deleted from Firebase!");
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
}

function updateCart() {
  document.querySelector("#productsInCart").innerHTML = shoppingCart.length;
  listProductsInCart();
}

function listProductsInCart() {
  let cartProductsHtml = shoppingCart
    .map(
      (product, index) =>
        `<li>
            <span class="product-title">${product.Name}</span>
            <span class="product-price">${product.Pris} SEK</span>
            <button class="delete-cart-item" data-cart-index="${index}" data-cart-item-id="${product.id}">Delete</button>
        </li>`
    )
    .join("");
  document.querySelector("#products").innerHTML = cartProductsHtml;
  addDeleteEventListeners();
}

function addDeleteEventListeners() {
  const deleteButtons = document.querySelectorAll(".delete-cart-item");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", async (event) => {
      const cartIndex = event.target.getAttribute("data-cart-index");
      const cartItemId = event.target.getAttribute("data-cart-item-id");

      // Remove from Firebase
      await deleteCartItemFromFirebase(cartItemId);

      // Remove from local cart array and update UI
      shoppingCart.splice(cartIndex, 1);
      updateCart();
    });
  });
}

async function fetchAndDisplayProducts() {
  const querySnapshot = await getDocs(collection(db, "Produkter"));
  console.log("Query snapshot:", querySnapshot);

  let productsHtml = "";
  querySnapshot.forEach((doc) => {
    let product = doc.data();
    productsHtml += `
      <div class="product">
          <h3>${product.Name}</h3>
          <p>${product.Beskrivning}</p>
          <p>Pris: ${product.Pris} SEK</p>
          <button data-product-id="${doc.id}">Lägg till i varukorgen</button>
      </div>
    `;
  });
  document.getElementById("product-list").innerHTML = productsHtml;
  addEventListenersToProducts();
}

function addEventListenersToProducts() {
  const productButtons = document.querySelectorAll("#product-list button");
  productButtons.forEach((button) => {
    button.addEventListener("click", async (event) => {
      const productId = event.target.getAttribute("data-product-id");
      const product = Array.from(productButtons).find(
        (btn) => btn.getAttribute("data-product-id") === productId
      ).parentNode;
      const productName = product.querySelector("h3").textContent;
      const productPrice = product
        .querySelector("p")
        .textContent.replace("Pris: ", "")
        .replace(" SEK", "");
      const cartItem = { Name: productName, Pris: productPrice };

      // Save to Firebase and get the document ID
      const cartItemId = await saveCartItemToFirebase(cartItem);

      // Add the document ID to the cart item
      cartItem.id = cartItemId;

      shoppingCart.push(cartItem);
      updateCart();
    });
  });
}

document.querySelector("#open-cart").addEventListener("click", () => {
  document.querySelector("#cart").classList.toggle("hide");
});

fetchAndDisplayProducts();
