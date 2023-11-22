document.getElementById("loadButton").addEventListener("click", function () {
  var xhr = new XMLHttpRequest(); // Skapar ett nytt XMLHttpRequest-objekt

  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true); // Konfigurerar förfrågan

  xhr.onload = function () {
    if (this.status === 200) {
      var data = JSON.parse(this.responseText);
      var output = `
                <h3>${data.title}</h3>
                <p>${data.body}</p>
            `;

      document.getElementById("dataContainer").innerHTML = output; // Uppdaterar webbsidans innehåll
    }
  };

  xhr.send(); // Skickar förfrågan
});
