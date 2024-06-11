import React, { useState } from "react";

function Note({ note }) {
  return (
    <div className="note-container">
      <div className="note-timestamp">
        <p>{note.createTime}</p>
        <p>{note.createDate}</p>
      </div>
      <p className="note-content">{note.note}</p>
    </div>
  );
}

export default Note;
