import React from "react";
import "./index.css";
import Group from "../../components/Group";

function index() {
  const groupsData = [
    {
      id: 1,
      color: "#0047FF",
      name: "Cuvette Notes",
      shortForm: "CU",
      isSelected: true,
    },
    {
      id: 2,
      color: "#B38BFA",
      name: "My personal grp",
      shortForm: "MG",
    },
    {
      id: 3,
      color: "#FFC0C0",
      name: "Javascript grp",
      shortForm: "JS",
    },
    {
      id: 4,
      color: "#43E6FC",
      name: "HTML grp",
      shortForm: "HT",
    },
  ];
  return (
    <>
      <div className="groups-container">
        <h2>Pocket Notes</h2>
        <div className="groups">
          <button className="create-group-btn">+ Create Notes Group</button>
          <div className="select-group">
            {groupsData.map((group) => (
              <Group key={group.id} group={group} />
            ))}
          </div>
        </div>
      </div>
      <div className="create-group">
        <h3>Create New Notes group</h3>
        <div className="enter-group-data">
          <div>
            <label htmlFor="group-name">Group Name</label>
            <input type="text" name="group-name" id="group-name" />
          </div>
          <div className="group-colors-container">
            <label htmlFor="group-colors">Choose color</label>
            <ul id="group-colors">
              <li
                className="group-color"
                style={{ backgroundColor: "#B38BFA" }}
                value="#B38BFA"
              ></li>
              <li
                className="group-color"
                style={{ backgroundColor: "#FF79F2" }}
                value="#FF79F2"
              ></li>
              <li
                className="group-color"
                style={{ backgroundColor: "#43E6FC" }}
                value="#43E6FC"
              ></li>
              <li
                className="group-color"
                style={{ backgroundColor: "#F19576" }}
                value="#F19576"
              ></li>
              <li
                className="group-color"
                style={{ backgroundColor: "#0047FF" }}
                value="#0047FF"
              ></li>
              <li
                className="group-color"
                style={{ backgroundColor: "#6691FF" }}
                value="#6691FF"
              ></li>
            </ul>
          </div>
        </div>
        <button className="create-group-btn">Create</button>
      </div>
    </>
  );
}

export default index;
