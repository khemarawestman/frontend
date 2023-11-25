// Function to create a new note
async function createNote() {
  // Get values from the input fields
  const note = {
    username: document.getElementById("username").value,
    title: document.getElementById("noteTitle").value,
    note: document.getElementById("noteText").value,
  };

  // Check if all fields are filled
  if (!note.username || !note.title || !note.note) {
    alert("Please fill in all fields.");
    return;
  }

  // Attempt to send a POST request to the API
  try {
    const response = await fetch(
      "https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes",
      {
        method: "POST",
        body: JSON.stringify(note),
        headers: { "Content-Type": "application/json" },
      }
    );

    // Check response status
    if (response.ok) {
      alert("Note created successfully!");
      getNotes(); // Refresh the list of notes
    } else {
      alert("Failed to create note.");
    }
  } catch (error) {
    alert("An error occurred while creating the note.");
  }
}

// Function to retrieve notes for a given user
async function getNotes() {
  const username = document.getElementById("username").value;

  if (!username) {
    alert("Please enter a username.");
    return;
  }

  try {
    const response = await fetch(
      `https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${username}`
    );

    if (response.ok) {
      const notes = await response.json();
      displayNotes(notes); // Display the notes
    } else {
      alert("Failed to retrieve notes.");
    }
  } catch (error) {
    alert("An error occurred while retrieving the notes.");
  }
}

// Function to display notes on the page
function displayNotes(data) {
  const notesContainer = document.getElementById("notesDisplay");
  notesContainer.innerHTML = "";

  // Extracting the notes array from the data object
  const notes = data.notes;

  if (Array.isArray(notes) && notes.length > 0) {
    notes.forEach((note) => {
      let noteElement = document.createElement("div");
      noteElement.innerHTML = `<h3>${note.title}</h3><p>${note.note}</p><button onclick="deleteNote('${note.id}')">Delete</button>`;
      notesContainer.appendChild(noteElement);
    });
  } else {
    notesContainer.innerHTML =
      "<p>No notes found or invalid data received.</p>";
  }
}

// Function to update an existing note
async function updateNote() {
  const noteId = document.getElementById("noteId").value;
  const updatedText = document.getElementById("updateNoteText").value;

  if (!noteId || !updatedText) {
    alert("Please fill in the note ID and updated text.");
    return;
  }

  try {
    const response = await fetch(
      `https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${noteId}`,
      {
        method: "PUT",
        body: JSON.stringify({ note: updatedText }),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.ok) {
      alert("Note updated successfully!");
      getNotes(); // Refresh the list of notes
    } else {
      alert("Failed to update note.");
    }
  } catch (error) {
    alert("An error occurred while updating the note.");
  }
}

// Function to delete a note
async function deleteNote(noteId) {
  if (!noteId) {
    alert("Note ID is missing.");
    return;
  }

  try {
    const response = await fetch(
      `https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${noteId}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      alert("Note deleted successfully!");
      getNotes(); // Refresh the list of notes
    } else {
      alert("Failed to delete note.");
    }
  } catch (error) {
    alert("An error occurred while deleting the note.");
  }
}
