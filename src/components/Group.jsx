import React from "react";

function Group({ group }) {
  return (
    <div>
      <div
        style={{
          backgroundColor: group.color,
          color: "white",
          display: "inline-block",
        }}
      >
        {group.shortForm}
      </div>
      <span>{group.name}</span>
    </div>
  );
}

export default Group;
