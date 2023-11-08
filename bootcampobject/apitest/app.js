/* const API_KEY = "a0d9f86fa7452dae72d8c324839ad786";
const BASE_URL = "https://api.flickr.com/services/rest";
const containerElem = document.querySelector(".container");

async function getPhotos() {
  const url = `${BASE_URL}?api_key=${API_KEY}&method=flickr.photos.search&text=cat&format=json&nojsoncallback=1`;
  const response = await fetch(url);
  const data = await response.json();

  data.photos.photo.forEach((image) => {
    const imageUrl = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_c.jpg`;

    const imageElem = document.createElement("img");
    imageElem.src = imageUrl;
    containerElem.appendChild(imageElem);
  });
}

getPhotos(); */

const API_KEY = "a0d9f86fa7452dae72d8c324839ad786";
const BASE_URL = "https://api.flickr.com/services/rest";
const containerElem = document.querySelector(".container");

async function getPhotos() {
  const url = `${BASE_URL}?api_key=${API_KEY}&method=flickr.photos.search&text=cats&format=json&nojsoncallback=1`;
  const response = await fetch(url);
  const data = await response.json();

  for (let i = 0; i < data.photos.photo.length; i++) {
    const image = data.photos.photo[i];
    const imageUrl = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_c.jpg`;

    const imageElem = document.createElement("img");
    imageElem.src = imageUrl;
    containerElem.appendChild(imageElem);
  }
}

getPhotos();

/* const API_KEY = "a0d9f86fa7452dae72d8c324839ad786";
const BASE_URL = "https://api.flickr.com/services/rest";
const imageElem = document.querySelector("img");

async function getPhotos() {
  const results = "";
  const url = ${BASE_URL}?api_key=${API_KEY}&method=flickr.photos.search&text=cat&format=json&nojsoncallback=1;
  const response = await fetch(url);
  const data = await response.json();

  for (i = 0; i < 10; i++) {
    console.log(data.photos.photo[i]);
    const image = data.photos.photo[i];
    console.log(image);

    const imageUrl = https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_c.jpg;
    console.log(imageUrl);
    imageElem.src = imageUrl;

    document.createElement("img");
    imageElem.innerHTML = imageUrl;
    results.appendChild(imageElem);
  }
}

getPhotos(); */
