let shoppingCart = [];

let products = document.getElementsByTagName("button");

document.querySelector("#open-cart").addEventListener("click", () => {
  document.querySelector("#cart").classList.toggle("hide");
});

//Function declarations, add code inside {}
function updateCart() {
  document.querySelector("#productsInCart").innerHTML = shoppingCart.length;
}
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
}

//For-loops of two arrays

for (let i = 0; i < products.length; i++) {
  products[i].addEventListener("click", (event) => {
    console.log(event.target);
    let product = event.target.parentNode.getAttribute("data-product");
    shoppingCart.push(product);
    listProductsInCart();
    updateCart();
    // event here is the HTML element that was clicked on
  });
}
