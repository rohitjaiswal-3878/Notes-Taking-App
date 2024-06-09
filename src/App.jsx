import "./App.css";
import PocketNotes from "./pages/PocketNotes";
import Groups from "./pages/Groups";
import Notes from "./pages/Notes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Groups />
        <Routes>
          <Route element={<PocketNotes />} path="/" />
          <Route element={<Notes />} path="/notes" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
