import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  where,
  updateDoc,
  doc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK_hCnXQM-UqYcPo0AC38gVLy1cnkphL8",
  authDomain: "swingnote-422da.firebaseapp.com",
  projectId: "swingnote-422da",
  storageBucket: "swingnote-422da.appspot.com",
  messagingSenderId: "118392924171",
  appId: "1:118392924171:web:381c4af2a623fd66743f0e",
  measurementId: "G-LSL3ENMQL4",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("createNoteButton")
    .addEventListener("click", createNote);
  document
    .getElementById("viewNotesButton")
    .addEventListener("click", getNotes);
  document
    .getElementById("updateNoteButton")
    .addEventListener("click", updateNote);
  document.getElementById("deleteNoteButton").addEventListener("click", () => {
    const noteId = document.getElementById("noteId").value;
    if (noteId) {
      deleteNote(noteId);
    } else {
      alert("Please enter a Note ID.");
    }
  });
});

// CreateNote
async function createNote() {
  const note = {
    username: document.getElementById("username").value,
    title: document.getElementById("noteTitle").value,
    note: document.getElementById("noteText").value,
  };

  if (!note.username || !note.title || !note.note) {
    alert("Please fill in all fields.");
    return;
  }

  try {
    await addDoc(collection(db, "notes"), note);
    alert("Note created successfully!");
    getNotes();
  } catch (error) {
    alert("An error occurred: " + error);
  }
}
//getnote
async function getNotes() {
  const username = document.getElementById("username").value;

  if (!username) {
    alert("Please enter a username.");
    return;
  }

  try {
    const notesQuery = query(
      collection(db, "notes"),
      where("username", "==", username)
    );
    const querySnapshot = await getDocs(notesQuery);
    let notes = [];
    querySnapshot.forEach((doc) => {
      notes.push({ ...doc.data(), id: doc.id });
    });
    displayNotes(notes);
  } catch (error) {
    alert("An error occurred: " + error);
  }
}

// DisplayNotes

function displayNotes(notes) {
  const notesContainer = document.getElementById("notesDisplay");
  notesContainer.innerHTML = "";

  notes.forEach((note) => {
    let noteElement = document.createElement("div");
    noteElement.innerHTML = `<h3>${note.title}</h3><p>${note.note}</p>`;

    // Create a delete button for each note
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteNote(note.id));

    noteElement.appendChild(deleteButton);
    notesContainer.appendChild(noteElement);
  });
}

// UpdateNote
async function updateNote() {
  const noteId = document.getElementById("noteId").value;
  const updatedText = document.getElementById("updateNoteText").value;

  if (!noteId || !updatedText) {
    alert("Please fill in the note ID and updated text.");
    return;
  }

  try {
    const noteRef = doc(db, "notes", noteId);
    await updateDoc(noteRef, { note: updatedText });
    alert("Note updated successfully!");
    getNotes();
  } catch (error) {
    alert("An error occurred: " + error);
  }
}

// DeleteNote
async function deleteNote(noteId) {
  try {
    const noteRef = doc(db, "notes", noteId);
    await deleteDoc(noteRef);
    alert("Note deleted successfully!");
    getNotes();
  } catch (error) {
    alert("An error occurred: " + error);
  }
}
