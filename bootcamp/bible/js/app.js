let book1 = {
  title: "Moby Dick",
  author: "Herman Melville",
  numPages: 720,
};

let book2 = {
  title: "Pride and Prejudice",
  author: "Jane Austen",
  numPages: 432,
};

let book3 = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  numPages: 180,
};

let books = [book1, book2, book3];

function searchByTitle(books, searchTerm) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].title === searchTerm) {
      return books[i];
    }
  }
  return null;
}

function search() {
  let searchTerm = document.getElementById("searchInput").value;
  let result = searchByTitle(books, searchTerm);

  let resultContainer = document.getElementById("resultContainer");

  if (result !== null) {
    resultContainer.innerHTML = `
            <h2>Boken hittades:</h2>
            <p><strong>Title:</strong> ${result.title}</p>
            <p><strong>Author:</strong> ${result.author}</p>
            <p><strong>Number of Pages:</strong> ${result.numPages}</p>
        `;
  } else {
    resultContainer.innerHTML = "<h2>Boken hittades inte.</h2>";
  }
}
