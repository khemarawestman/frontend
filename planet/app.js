async function getAPIKey() {
  // Gör en POST-förfrågan för att hämta API-nyckeln
  const response = await fetch(
    "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys",
    {
      method: "POST",
    }
  );
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  const data = await response.json();
  console.log(data);
  // Returnerar API-nyckeln från datan
  return data.key;
}

// Hämtar planetdata
async function fetchPlanets() {
  // Hämtar API-nyckeln
  const key = await getAPIKey();
  if (!key) {
    console.log("No API key retrieved");
  }
  const response = await fetch(
    "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies",
    {
      headers: { "x-zocom": `${key}` },
    }
  );
  if (!response.ok) {
    console.log(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  console.log(data.bodies);
  return data.bodies;
}

// Hämtar planetdata och ställer in händelsehantering
async function setup() {
  // Hämtar planetdata
  const planetData = await fetchPlanets();
  // Om planetdata finns, ställ in klickhändelser och modalfönsterhändelser
  if (planetData) {
    setupClicks(planetData);
    setupModal();
  }
}
// Eventlistener som väntar tills DOM är helt laddad
document.addEventListener("DOMContentLoaded", () => {
  setup();
});

// Ställer in klickhändelser för varje planet-element

function setupClicks(planetsData) {
  // Lägger till en klickhändelse som visar planetinformation
  document.querySelectorAll(".orbit").forEach((planetElement) => {
    planetElement.addEventListener("click", () =>
      showInfo(planetsData, planetElement.id)
    );
  });
}
// Visar detaljerad information om en planet när en planet-element klickas
function showInfo(planetsData, planetId) {
  const planet = planetsData.find((p) => p.name.toLowerCase() === planetId);
  if (!planet) return;

  const planetInfoHtml = `
    <div class="planet-info">
    <div class = containinfo>
      <h3> ${planet.name}</h3>
      <p class="latin-name">${planet.latinName}</p>
      <p class="description"> ${planet.desc}</p>
    </div>
    <div class="planetinfo">
    
    </div>
      <div class=footer >
      <p class="circumference">CIRCUMFERENCE<br>${planet.circumference}</p>
      <p class="rotation">Rotation Period<br> ${planet.rotation}</p>
      <p class="day-temperature">MAX TEMPERATURE (Day)<br> ${planet.temp.day}°C</p>
      
      </div>
      <div class="distance-from-sun">
     
      <p class="distance">DISTANCE FROM THE SUN <br> ${planet.distance} KM</p>
      <p class="night-temperature">MAX TEMPERATURE (Night)<br> ${planet.temp.night}°C</p>
     
    </div>
  
    </div>`;
  console.log(planetInfoHtml);
  const planetInfoElement = document.getElementById("planet-info");
  planetInfoElement.innerHTML = planetInfoHtml;
  document.getElementById("planetModal").style.display = "block";
}

// Ställer in händelser för att stänga modalfönstret
function setupModal() {
  const modal = document.getElementById("planetModal");
  document.querySelector(".close").addEventListener("click", () => {
    modal.style.display = "none";
  });
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}
