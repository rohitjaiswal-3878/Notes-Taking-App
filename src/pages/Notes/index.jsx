import "./index.css";
import Note from "../../components/Note";
import sendIcon from "../../assets/sendIcon.png";
import React, { useEffect, useState } from "react";
import arrowIcon from "../../assets/arrowIcon.png";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function Notes({ groups, isGroupSel, goBack, setGoBack }) {
  let listRef = useRef(null);
  let navigate = useNavigate();
  let [selectedGroup, setSelectedGroup] = useState({});
  let [shortName, setShortName] = useState("");
  let [notes, setNotes] = useState({
    grpName: "",
    grpNotes: [],
  });
  let [note, setNote] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("selectedGroupName")) {
      navigate("/");
    }
  }, []);
  useEffect(() => {
    let selGroup = localStorage.getItem("selectedGroupName");
    let temp = groups.filter((group) => group.groupName == selGroup);
    let notesData = localStorage.getItem(selGroup)
      ? JSON.parse(localStorage.getItem(selGroup))
      : false;
    setSelectedGroup(temp[0]);
    if (!notesData) {
      setNotes({ grpName: selGroup, grpNotes: [] });
    } else {
      setNotes(notesData);
    }
    let short = temp[0].groupName
      .split(" ")
      .map((part) => part[0].toUpperCase())
      .join("");
    setShortName(short);
  }, [groups, isGroupSel]);

  useEffect(() => {
    if (notes.grpName != "") {
      localStorage.setItem(notes.grpName, JSON.stringify(notes));
    }
  }, [notes]);

  const handleSubmit = (e) => {
    let date = new Date();
    let hours = date.getHours() % 12;
    let format = "";
    if (date.getHours() >= 12) {
      format = "PM";
    } else {
      format = "AM";
    }
    let noteData = {
      createTime: hours + ":" + date.getMinutes() + " " + format,
      createDate:
        date.getDate() +
        " " +
        getNameOfMonth(date.getMonth()) +
        " " +
        date.getFullYear(),
      note: note,
    };
    setNotes((prev) => {
      let t = prev.grpNotes;
      return { ...notes, grpNotes: [...t, noteData] };
    });
    setNote("");
  };

  const handleNoteInput = (e) => {
    setNote(e.target.value);
  };

  useEffect(() => {
    listRef.current?.lastElementChild?.scrollIntoView();
  }, [notes]);

  const handleGoBack = () => {
    setGoBack("none");
  };

  useEffect(() => {}, [goBack]);
  return (
    <>
      <div className="notes-container" style={{ display: goBack }}>
        <div className="heading">
          <img
            src={arrowIcon}
            alt="arrow icon"
            id="arrow-icon"
            onClick={handleGoBack}
          />
          <span
            className="heading-icon"
            style={{ backgroundColor: selectedGroup.groupColor }}
          >
            {shortName}
          </span>
          <span className="heading-title">{selectedGroup.groupName}</span>
        </div>
        <div className="notes" id="notes-box" ref={listRef}>
          {notes.grpNotes.map((note, index) => (
            <Note key={index} note={note} />
          ))}
        </div>
        <div className="input-notes">
          <textarea
            name="input-note"
            id="input-note"
            placeholder="Enter your text here..........."
            onInput={handleNoteInput}
            value={note}
          ></textarea>
          <img src={sendIcon} alt="send icon" onClick={handleSubmit} />
        </div>
      </div>
    </>
  );
}

function getNameOfMonth(number) {
  let array = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return array[number];
}
export default Notes;
