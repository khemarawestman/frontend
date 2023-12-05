let products = document.getElementsByTagName("button");
let shoppingCart = [];

console.log(products);

function updateCart() {
  document.querySelector("#productsInCart").innerHTML = shoppingCart.length;
}

function deleteCartItem(position) {
  // Tar emot bokens position i arrayen
  shoppingCart.splice(position, 1); // Ta bort boken på en viss position i arrayen
}

function setEventListeners() {
  const cartItems = document.querySelectorAll("li"); // Hämta alla böcker i varukorgen

  for (let i = 0; i < cartItems.length; i++) {
    cartItems[i].addEventListener("click", (event) => {
      // Koppla en eventlistener till varje bok
      const title = event.target.textContent.replace("Titel: ", ""); // Hämta titeln och ta bort ordet "Titel: ";
      const position = shoppingCart.indexOf(title); // Hitta positionen i arrayen för titeln på boken

      deleteCartItem(position);
      listProductsInCart(); // Uppdaterar listan igen
      updateCart(); // Uppdaterar antalet igen
    });
  }
}

function listProductsInCart() {
  let cartProducts = "";

  for (let i = 0; i < shoppingCart.length; i++) {
    cartProducts =
      cartProducts +
      '<li><span class="product-title">Titel: </span>' +
      shoppingCart[i] +
      "</li>";
  }

  document.querySelector("#products").innerHTML = cartProducts;

  setEventListeners();
}

document.querySelector("#open-cart").addEventListener("click", () => {
  document.querySelector("#cart").classList.toggle("hide");
  listProductsInCart();
});

for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  products[i].addEventListener("click", (event) => {
    //console.log(event.target.parentNode.getAttribute('data-product'));
    // event here is the HTML element that was clicked on
    let product = event.target.parentNode.getAttribute("data-product");
    if (shoppingCart.includes(product) === false) {
      shoppingCart.push(product);
    } else {
      alert("Produkten är redan tillagd!");
    }

    updateCart();
    listProductsInCart();
    //console.log(shoppingCart);
  });
}
