import "./index.css";
import React from "react";
import peopleImg from "../../assets/people_img.png";
import lockIcon from "../../assets/lock_icon.png";

function PocketNotes() {
  return (
    <div className="container-no-notes">
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
