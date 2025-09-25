import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Nav from "./Nav";
import Sessions from "./Sessions/Sessions";
import Decks from "./Decks";

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="min-h-screen bg-slate-700 max-w-[800px] mx-auto">
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to="/sessions" replace />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/decks" element={<Decks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
