import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Pages
import LandingPage from "./pages/LandingPage";
// Components
import Header from "./components/Header"; import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} /> </Routes>
      </Router>
    </div>
  );
}

export default App;