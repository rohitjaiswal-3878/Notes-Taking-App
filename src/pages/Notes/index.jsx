import "./index.css";
import Note from "../../components/Note";

import React, { useState } from "react";

function Notes() {
  const [notes, setNotes] = useState([
    {
      time: "10:10 Am",
      date: "9 March 2023",
      note: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
    },
    {
      time: "10:10 Am",
      date: "9 March 2023",
      note: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
    },
    {
      time: "10:10 Am",
      date: "9 March 2023",
      note: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
    },
    {
      time: "10:30 Am",
      date: "9 March 2023",
      note: "It's not only writers who can benefit from this free online tool. If you're a programmer who's working on a project where blocks of text are needed, this tool can be a great way to get that. It's a good way to test your programming and that the tool being created is working well.",
    },
    {
      time: "10:38 Am",
      date: "9 March 2023",
      note: "When first building this generator we thought about using computers to generate the paragraphs, but they weren't very good and many times didn't make any sense at all. We therefore took the time to create paragraphs specifically for this generator to make it the best that we could.",
    },
  ]);
  return (
    <>
      <div className="notes-container">
        <div className="heading">
          <span className="heading-icon">CU</span>
          <span className="heading-title">Cuvette Notes</span>
        </div>
        <div className="notes" id="notes-box">
          {notes.map((note, index) => (
            <Note key={index} note={note} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Notes;
