<<<<<<< HEAD
/*//Variables to use and it's a mix of global and local variables
let shoppingCart = [];
let products = document.getElementsByTagName("button");
let cartProducts = "";

//This code gets whatever is inside data-product in the HTML
document.querySelector("#products").innerHTML = cartProducts;
document.querySelector("#open-cart").addEventListener("click", () => {
  cartProducts =
    cartProducts +
    '<li><span class="product-title">Titel: </span>' +
    shoppingCart[i] +
    "</li>";
=======
let shoppingCart = [];

let products = document.getElementsByTagName("button");

document.querySelector("#open-cart").addEventListener("click", () => {
  document.querySelector("#cart").classList.toggle("hide");
>>>>>>> 060f372e71c8cae035347f11804f06e91b2ba562
});

//Function declarations, add code inside {}
function updateCart() {
  document.querySelector("#productsInCart").innerHTML = shoppingCart.length;
}
<<<<<<< HEAD

function listProductsInCart() {
  for (let i = 0; i < shoppingCart.length; i++) {}
=======
function listProductsInCart() {
  let cartProducts = "";
  for (let i = 0; i < shoppingCart.length; i++) {
    cartProducts +=
      '<li><span class="product-title">Titel: </span>' +
      shoppingCart[i] +
      ' <button class="delete-button" data-index="' +
      i +
      //add delete button
      '">Delete</button></li>';
  }
  document.querySelector("#products").innerHTML = cartProducts;

  // Add event listener for delete buttons
  let deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      let index = event.target.getAttribute("data-index");
      shoppingCart.splice(index, 1);
      listProductsInCart();
      updateCart();
    });
  });
>>>>>>> 060f372e71c8cae035347f11804f06e91b2ba562
}

//For-loops of two arrays

for (let i = 0; i < products.length; i++) {
  products[i].addEventListener("click", (event) => {
    console.log(event.target);
    let product = event.target.parentNode.getAttribute("data-product");
    shoppingCart.push(product);
<<<<<<< HEAD
    document.querySelector("#cart").classList.toggle("hide");

    updateCart();
    listProductsInCart();
  });
}
updateCart();
//Function calls and there should be two listProductsInCart()*/
// Variables to use and it's a mix of global and local variables
let shoppingCart = [];
let products = document.getElementsByTagName("button");
let cartProducts = "";

// This code gets whatever is inside data-product in the HTML

// Update the number of products in the cart
function updateCart() {
  document.querySelector("#productsInCart").innerHTML = shoppingCart.length;
}

// Function to list products in the cart
function listProductsInCart() {
  let productsList = "";
  for (let i = 0; i < shoppingCart.length; i++) {
    productsList +=
      '<li><span class="product-title">Titel: </span>' +
      shoppingCart[i] +
      "</li>";
  }
  document.querySelector("#products").innerHTML = productsList;
}

// Event listener for each product button
for (let i = 0; i < products.length; i++) {
  products[i].addEventListener("click", (event) => {
    let product = event.target.getAttribute("data-product");
    shoppingCart.push(product);
    updateCart();
    listProductsInCart();
  });
}

// Event listener for opening the cart
document.querySelector("#open-cart").addEventListener("click", () => {
  // You can add code here to handle what happens when the cart is opened
  // For example, you might want to display the list of products in the cart
});

// Function calls
updateCart(); // Update cart count initially
=======
    listProductsInCart();
    updateCart();
    // event here is the HTML element that was clicked on
  });
}
>>>>>>> 060f372e71c8cae035347f11804f06e91b2ba562
