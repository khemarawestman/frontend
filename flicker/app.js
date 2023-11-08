async function searchFlickr() {
  try {
    const searchTerm = document.getElementById("searchTerm").value;
    const apiKey = "062d17c7af568374084b0daee6ab9ffa";
    const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${searchTerm}&format=json&nojsoncallback=1`;

    const response = await fetch(apiUrl);
    const data = await response.json();

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
    resultsDiv.appendChild(imgElement);
  });
}
