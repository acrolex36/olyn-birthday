import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhotoPuzzle from "./PuzzleComponent/PhotoPuzzle";
import MessagePage from "./MessagePage/MessagePage";
import PasscodePage from "./PasscodePage/PasscodePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PasscodePage />} />
        <Route path="/puzzle" element={<PhotoPuzzle />} />
        <Route path="/message" element={<MessagePage />} />
      </Routes>
    </Router>
  );
}

export default App;
