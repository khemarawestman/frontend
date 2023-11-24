async function addNote() {
  // Implement the code snippet for adding a note
  // Get values from input fields, etc.
}

async function fetchNotes() {
  const username = document.getElementById("fetchUsername").value;
  let response = await fetch(
    `https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${username}`
  );
  let data = await response.json();

  console.log(data);
}

async function updateNote() {
  // Implement the code snippet for updating a note
  // You might need an input field to specify which note to update
}

async function deleteNote() {
  // Implement the code snippet for deleting a note
  // You might need an input field to specify which note to delete
}

// Ensure these functions are properly linked to your HTML buttons
