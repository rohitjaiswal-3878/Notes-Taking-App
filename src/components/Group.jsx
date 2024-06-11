import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Group({ group, isGroupSel, setIsGroupSel, goBack, setGoBack }) {
  let [shortName, setShortName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    let short = group.groupName
      .split(" ")
      .map((part) => part[0].toUpperCase())
      .join("");
    setShortName(short);
  }, []);

  const handleClick = () => {
    setIsGroupSel({ ...isGroupSel, selGroupName: group.groupName });
    setGoBack("");
    navigate("/notes");
  };

  useEffect(() => {
    let temp = localStorage.getItem("selectedGroupName");
    if (temp) {
      navigate("/notes");
    }
  }, [goBack]);
  return (
    <div
      style={{
        backgroundColor:
          isGroupSel.selGroupName == group.groupName && goBack != "none"
            ? "#F7ECDC"
            : "",
        padding: "10px",
        borderStartStartRadius: "20px",
        borderEndStartRadius: "20px",
        display: "flex",
        alignItems: "center",
      }}
      onClick={handleClick}
    >
      <div
        style={{
          backgroundColor: group.groupColor,
          color: "white",
          display: "inline-block",
          padding: "6%",
          width: "1.25rem",
          height: "1.25rem",
          borderRadius: "50%",
          textAlign: "center",
        }}
      >
        {shortName}
      </div>
      <span
        style={{
          marginLeft: "10px",
          fontWeight: "500",
        }}
      >
        <p>{group.groupName}</p>
      </span>
    </div>
  );
}

export default Group;
