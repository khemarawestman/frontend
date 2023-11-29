async function getNotes() {
  const username = document.getElementById("username").value;
  if (!username) {
    alert("Ange ett användarnamn.");
    return;
  }

  try {
    let response = await fetch(
      `https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${username}`
    );
    if (response.ok) {
      let notes = await response.json();
      displayNotes(notes);
    } else {
      alert("Kunde inte hämta anteckningar.");
    }
  } catch (error) {
    console.error("Fel:", error);
  }
}

async function createNote() {
  const note = {
    username: document.getElementById("username").value,
    title: document.getElementById("newNoteTitle").value,
    note: document.getElementById("newNoteText").value,
  };

  if (!note.username || !note.title || !note.note) {
    alert("Alla fält måste fyllas i.");
    return;
  }

  try {
    let response = await fetch(
      "https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes",
      {
        method: "POST",
        body: JSON.stringify(note),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.ok) {
      alert("Anteckningen har lagts till!");
      getNotes(); // Uppdatera listan med anteckningar
    } else {
      const errorData = await response.json();
      alert("Fel vid skapande av anteckning: " + errorData.message);
    }
  } catch (error) {
    console.error("Fel:", error);
  }
}

function displayNotes(notes) {
  const notesContainer = document.getElementById("notes");
  notesContainer.innerHTML = ""; // Rensa befintliga anteckningar

  if (Array.isArray(notes)) {
    notes.forEach((note) => {
      let noteDiv = document.createElement("div");
      noteDiv.innerHTML = `<h3>${note.title}</h3><p>${note.note}</p>`;
      notesContainer.appendChild(noteDiv);
    });
  } else {
    notesContainer.innerHTML = "<p>Inga anteckningar hittades.</p>";
  }
}
