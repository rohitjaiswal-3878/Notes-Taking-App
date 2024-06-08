import "./App.css";
import PocketNotes from "./pages/PocketNotes";
import Groups from "./pages/Groups";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Groups />
        <Routes>
          <Route element={<PocketNotes />} path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
