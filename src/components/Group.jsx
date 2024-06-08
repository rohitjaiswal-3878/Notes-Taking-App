import React from "react";

function Group({ group }) {
  return (
    <div>
      <div
        style={{
          backgroundColor: group.color,
          color: "white",
          display: "inline-block",
          padding: "6%",
          width: "1.25rem",
          height: "1.25rem",
          borderRadius: "50%",
        }}
      >
        {group.shortForm}
      </div>
      <span
        style={{
          marginLeft: "10px",
          fontWeight: "500",
        }}
      >
        {group.name}
      </span>
    </div>
  );
}

export default Group;
