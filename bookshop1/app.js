import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_g9OJHHFR5OkyKy4YCird6ujr_jiSB9c",
    authDomain: "bookshop-7e61c.firebaseapp.com",
    projectId: "bookshop-7e61c",
    storageBucket: "bookshop-7e61c.appspot.com",
    messagingSenderId: "712677729399",
    appId: "1:712677729399:web:441f0ab4f1c9418a11d272",
    measurementId: "G-WC6V3MGJ2M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let shoppingCart = [];

function updateCart() {
    document.querySelector("#productsInCart").innerHTML = shoppingCart.length;
    listProductsInCart();
}

function listProductsInCart() {
    let cartProductsHtml = shoppingCart.map(product =>
        `<li>
            <span class="product-title">${product.Name}</span>
            <span class="product-price">${product.Pris} SEK</span>
        </li>`
    ).join('');
    document.querySelector("#products").innerHTML = cartProductsHtml;
}

async function fetchAndDisplayProducts() {
  const querySnapshot = await getDocs(collection(db, "Produkter collections"));
  console.log("Query snapshot:", querySnapshot);

  // Fetch a specific document
  async function fetchSpecificProduct() {
    const docRef = doc(db, "Produkter", "g9cgtno82RfhAS22kcWY");
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }
  }
  fetchSpecificProduct();

  let productsHtml = '';
  querySnapshot.forEach((doc) => {
      let product = doc.data();
      productsHtml += `
          <div class="product">
              <h3>${product.Title}</h3>
              <p>${product.Beskrivning}</p>
              <p>Pris: ${product.Pris} SEK</p>
              <button data-product-id="${doc.id}">Lägg till i varukorgen</button>
          </div>
      `;
  });
  document.getElementById('product-list').innerHTML = productsHtml;
  addEventListenersToProducts();
}

function addEventListenersToProducts() {
    const productButtons = document.querySelectorAll('#product-list button');
    productButtons.forEach(button => {
        button.addEventListener('click', event => {
            const productId = event.target.getAttribute('data-product-id');
            const product = Array.from(productButtons).find(btn => btn.getAttribute('data-product-id') === productId).parentNode;
            const productName = product.querySelector('h3').textContent;
            const productPrice = product.querySelector('p').textContent.replace('Pris: ', '').replace(' SEK', '');
            const cartItem = { Name: productName, Pris: productPrice };
            shoppingCart.push(cartItem);
            updateCart();
        });
    });
}

document.querySelector("#open-cart").addEventListener("click", () => {
    document.querySelector("#cart").classList.toggle("hide");
});

fetchAndDisplayProducts();
