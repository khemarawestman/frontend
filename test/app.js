document.addEventListener("DOMContentLoaded", function () {
  let bookfire = {
    title: "fire",
    author: "ben",
    numpages: "400",
  };
  let bookwater = {
    title: "water",
    author: "michael",
    numpages: "4030",
  };
  let bookgrass = {
    title: "grass",
    author: "caldwellpope",
    numpages: "690",
  };

  const books = [bookgrass, bookfire, bookwater];

  let searchBtn = document.getElementById("search-button");

  let booksearch = function () {
    let input = document.getElementById("book-search");
    let book = books.find(
      (book) => book.title.toLowerCase() == input.value.toLowerCase()
    );
    console.log(input.value);

    if (book) {
      console.log(book);
    } else {
      console.log("the book was not found");
    }
  };

  searchBtn.addEventListener("click", booksearch);
});
