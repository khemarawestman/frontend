let currentPage = 1; // Variabel för att hålla koll på nuvarande sida
let totalPages = 0; // Variabel för att hålla koll på totala antal sidor

async function searchFlickr() {
  try {
    const searchTerm = document.getElementById("searchTerm").value;
    const apiKey = "062d17c7af568374084b0daee6ab9ffa";
    const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${searchTerm}&format=json&nojsoncallback=1&page=${currentPage}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    totalPages = data.photos.pages; // Uppdatera totala antal sidor

    displayResults(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

function displayResults(data) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  console.log(data);
  const photos = data.photos.photo;

  photos.forEach((photo) => {
    const imageUrl = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
    const imgElement = document.createElement("img");
    imgElement.src = imageUrl;

    // Lägg till en eventlyssnare för varje bild
    imgElement.addEventListener("click", () => openModal(imageUrl));

    resultsDiv.appendChild(imgElement);
  });

  // Lägger till knappar för att gå bakåt och framåt i sidor
  const prevButton = document.createElement("button");
  prevButton.textContent = "Föregående sida";
  prevButton.addEventListener("click", prevPage);
  resultsDiv.appendChild(prevButton);

  const nextButton = document.createElement("button");
  nextButton.textContent = "Nästa sida";
  nextButton.addEventListener("click", nextPage);
  resultsDiv.appendChild(nextButton);

  // Lägger till sidräknare
  const pageCounter = document.createElement("div");
  pageCounter.textContent = `Sida ${currentPage} av ${totalPages}`;
  resultsDiv.appendChild(pageCounter);
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    searchFlickr();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    searchFlickr();
  }
}

function openModal(imageUrl) {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `<img src="${imageUrl}" alt="Större bild">`;
  document.body.appendChild(modal);

  // Lägg till en eventlyssnare för att stänga modalen när man klickar utanför bilden
  modal.addEventListener("click", closeModal);
}

function closeModal() {
  const modal = document.querySelector(".modal");
  modal.remove();
}
