import "./index.css";
import React, { useEffect } from "react";
import peopleImg from "../../assets/people_img.png";
import lockIcon from "../../assets/lock_icon.png";
import arrowIcon from "../../assets/arrowIcon.png";

function PocketNotes({ goBack, setGoBack }) {
  const handleArrowBack = () => {
    setGoBack("none");
  };
  useEffect(() => {}, [goBack]);
  return (
    <div
      className="container-no-notes"
      style={{
        display: goBack != "none" ? "flex" : "none",
      }}
    >
      <button onClick={handleArrowBack}>
        <img src={arrowIcon} alt="arrow icon" className="arrow-icon" />
      </button>
      <div>
        <div className="banner">
          <img src={peopleImg} alt="people image" />
        </div>
        <div className="info">
          <span className="heading">Pocket Notes</span>
          <p className="content">
            Send and receive messages without keeping your phone online.
            <br />
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone
          </p>
        </div>
      </div>
      <div className="encrypted">
        <img src={lockIcon} alt="lock icon" />
        <span>end-to-end encrypted</span>
      </div>
    </div>
  );
}

export default PocketNotes;
