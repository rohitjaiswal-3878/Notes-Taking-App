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
  );
}

export default index;
