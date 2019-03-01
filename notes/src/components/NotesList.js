import React, { Component } from "react";

const NotesList = ({ notes, deleteNote }) => {
  return (
    <ul>
      {notes.map(note => (
        <li key={note.id}>
          {note.title}
          <span
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => deleteNote(note.id)}
          >
            X
          </span>
        </li>
      ))}
    </ul>
  );
};

export default NotesList;
