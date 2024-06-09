import React from "react";

function Note({ note }) {
  return (
    <div
      style={{
        display: "flex",
        marginBottom: "40px",
      }}
    >
      <div
        style={{
          width: "15%",
          fontSize: "0.9rem",
        }}
      >
        <p>{note.time}</p>
        <p>{note.date}</p>
      </div>
      <p
        style={{
          fontSize: "1rem",
          width: "80%",
        }}
      >
        {note.note}
      </p>
    </div>
  );
}

export default Note;
