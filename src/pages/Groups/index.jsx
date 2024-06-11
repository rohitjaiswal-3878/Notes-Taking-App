import React, { useEffect, useLayoutEffect } from "react";
import "./index.css";
import Group from "../../components/Group";
import { useState } from "react";
import Popup from "reactjs-popup";

function index({
  isClicked,
  setIsClicked,
  groups,
  isGroupSel,
  setIsGroupSel,
  goBack,
  setGoBack,
  sideBar,
  setSideBar,
}) {
  const toggleSidebar = () => {
    let temp = localStorage.getItem("selectedGroupName");
    if (temp == "") {
      setSideBar(true);
    } else {
      setSideBar(false);
    }
  };

  useEffect(() => {
    const matchMedia = window.matchMedia("(max-width: 485px)");
    matchMedia.addEventListener("change", toggleSidebar);
    return () => matchMedia.removeEventListener("change", toggleSidebar);
  }, []);

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
        style={
          !sideBar
            ? { display: goBack != "none" ? "" : "inline-block" }
            : { display: "inline-block" }
        }
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
