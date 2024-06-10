import React from "react";

function Note({ note }) {
  return (
    <div className="note-container">
      <div className="note-timestamp">
        <p>{note.time}</p>
        <p>{note.date}</p>
      </div>
      <p className="note-content">{note.note}</p>
    </div>
  );
}

export default Note;
