const buttons = document.querySelectorAll("button");
const screenDisplay = document.querySelector(".screen");
let caluation = [];
let sumCalculation;

function calculate(button) {
  const value = button.textContent;
  if (value == "CLEAR") {
    caluation = [];
    screenDisplay.textContent = ".";
  } else if (value == "=") {
    screenDisplay.textContent = eval(sumCalculation);
  } else {
    caluation.push(value);
    sumCalculation = caluation.join("");
    screenDisplay.textContent = sumCalculation;
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);

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
