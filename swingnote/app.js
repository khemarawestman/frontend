function fetchNotes() {
  const username = document.getElementById("username").value;
  if (!username) {
    alert("Ange ett användarnamn.");
    return;
  }

  fetch(
    `https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${username}`
  )
    .then((response) => response.json())
    .then((notes) => displayNotes(notes))
    .catch((error) => console.error("Error:", error));
}

function displayNotes(notes) {
  const notesContainer = document.getElementById("notes");
  notesContainer.innerHTML = "";
  notes.forEach((note) => {
    const noteElement = document.createElement("div");
    noteElement.classList.add("note");
    noteElement.innerHTML = `<h3>${note.title}</h3><p>${note.text}</p>`;
    notesContainer.appendChild(noteElement);
  });
}

function addNote() {
  const title = document.getElementById("noteTitle").value;
  const text = document.getElementById("noteText").value;
  const username = document.getElementById("username").value;

  if (!title || !text || !username) {
    alert("Både titel, text och användarnamn måste anges.");
    return;
  }

  const noteData = { username, title, text };

  fetch("https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(noteData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      fetchNotes(); // Uppdatera listan med anteckningar
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  document.getElementById("noteTitle").value = "";
  document.getElementById("noteText").value = "";
}

// Exempel på hur man kan uppdatera och radera anteckningar saknas i detta exempel.
// Du behöver implementera dessa funktioner baserat på dina API-specifikationer.
