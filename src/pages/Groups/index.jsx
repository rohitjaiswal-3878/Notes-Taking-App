import React, { useEffect, useLayoutEffect } from "react";
import "./index.css";
import Group from "../../components/Group";

function index({
  isClicked,
  setIsClicked,
  groups,
  isGroupSel,
  setIsGroupSel,
  goBack,
  setGoBack,
}) {
  const handleCreateGroupButton = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    localStorage.setItem("selectedGroupName", isGroupSel.selGroupName);
  }, [isGroupSel]);

  useEffect(() => {}, [goBack]);

  return (
    <>
      <div
        className="groups-container"
        style={{ display: goBack != "none" ? "" : "inline-block" }}
      >
        <h2>Pocket Notes</h2>
        <div className="groups">
          <button
            className="create-group-btn"
            onClick={handleCreateGroupButton}
          >
            + Create Notes Group
          </button>
          <div className="select-group">
            {groups.map((group, index) => (
              <Group
                key={index}
                group={group}
                isGroupSel={isGroupSel}
                setIsGroupSel={setIsGroupSel}
                goBack={goBack}
                setGoBack={setGoBack}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
