import "./App.css";
import PocketNotes from "./pages/PocketNotes";
import Groups from "./pages/Groups";
import Notes from "./pages/Notes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import NotFound from "./pages/NotFound";

function App() {
  let [selectedColor, setSelectedColor] = useState("");
  let [sideBar, setSideBar] = useState(false);
  let [goBack, setGoBack] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [isGroupSel, setIsGroupSel] = useState({
    selGroupName: localStorage.getItem("selectedGroupName")
      ? localStorage.getItem("selectedGroupName")
      : "",
  });
  const [group, setGroup] = useState({
    groupName: "",
    groupColor: "",
  });
  const [groups, setGroups] = useState(
    localStorage.getItem("groups")
      ? JSON.parse(localStorage.getItem("groups"))
      : []
  );

  const handleOverlayClick = () => {
    setIsClicked(!isClicked);
  };

  const handleGroupName = (e) => {
    let name = e.target.value;
    setGroup({ ...group, groupName: name });
  };

  const handleGroupColor = (color) => {
    setGroup({ ...group, groupColor: color });
    setSelectedColor(color);
  };

  const handleCreateGroup = () => {
    if (group.groupName != "" && group.groupColor != "") {
      setGroups([...groups, group]);
      setGroup({ groupName: "", groupColor: "" });
    }
    setIsClicked(!isClicked);
    setSelectedColor("");
  };

  useEffect(() => {
    localStorage.setItem("groups", JSON.stringify(groups));
  }, [groups]);
  return (
    <>
      <div className="main-container">
        <BrowserRouter>
          <Groups
            isClicked={isClicked}
            setIsClicked={setIsClicked}
            groups={groups}
            isGroupSel={isGroupSel}
            setIsGroupSel={setIsGroupSel}
            goBack={goBack}
            setGoBack={setGoBack}
            sideBar={sideBar}
            setSideBar={setSideBar}
          />
          <Routes>
            <Route
              element={<PocketNotes goBack={goBack} setGoBack={setGoBack} />}
              path="/"
            />
            <Route
              element={
                <Notes
                  groups={groups}
                  isGroupSel={isGroupSel}
                  goBack={goBack}
                  setGoBack={setGoBack}
                  sideBar={sideBar}
                  setSideBar={setSideBar}
                />
              }
              path="/notes"
            />
            <Route element={<NotFound />} path="*" />
          </Routes>
        </BrowserRouter>
      </div>
      {isClicked && (
        <div>
          <div onClick={handleOverlayClick} className="overlay"></div>
          <div className="create-group">
            <h3>Create New Notes group</h3>
            <div className="enter-group-data">
              <div>
                <label htmlFor="group-name">Group Name</label>
                <input
                  type="text"
                  name="group-name"
                  id="group-name"
                  onInput={handleGroupName}
                />
              </div>
              <div className="group-colors-container">
                <label htmlFor="group-colors">Choose color</label>
                <ul id="group-colors">
                  <li
                    className="group-color"
                    style={{
                      backgroundColor: "#B38BFA",
                      border:
                        "1px solid " +
                        (selectedColor == "#B38BFA" ? "black" : "white"),
                    }}
                    onClick={() => handleGroupColor("#B38BFA")}
                  ></li>
                  <li
                    className="group-color"
                    style={{
                      backgroundColor: "#FF79F2",
                      border:
                        "1px solid " +
                        (selectedColor == "#FF79F2" ? "black" : "white"),
                    }}
                    onClick={() => handleGroupColor("#FF79F2")}
                  ></li>
                  <li
                    className="group-color"
                    style={{
                      backgroundColor: "#43E6FC",
                      border:
                        "1px solid " +
                        (selectedColor == "#43E6FC" ? "black" : "white"),
                    }}
                    onClick={() => handleGroupColor("#43E6FC")}
                  ></li>
                  <li
                    className="group-color"
                    style={{
                      backgroundColor: "#F19576",
                      border:
                        "1px solid " +
                        (selectedColor == "#F19576" ? "black" : "white"),
                    }}
                    onClick={() => handleGroupColor("#F19576")}
                  ></li>
                  <li
                    className="group-color"
                    style={{
                      backgroundColor: "#0047FF",
                      border:
                        "1px solid " +
                        (selectedColor == "#0047FF" ? "black" : "white"),
                    }}
                    onClick={() => handleGroupColor("#0047FF")}
                  ></li>
                  <li
                    className="group-color"
                    style={{
                      backgroundColor: "#6691FF",
                      border:
                        "1px solid " +
                        (selectedColor == "#6691FF" ? "black" : "white"),
                    }}
                    onClick={() => handleGroupColor("#6691FF")}
                  ></li>
                </ul>
              </div>
            </div>
            <button className="create-group-btn" onClick={handleCreateGroup}>
              Create
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
