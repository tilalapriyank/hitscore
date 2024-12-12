import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Header from "./components/header/Header";
import Home from "./pages/home";
import MatchTabs from "./pages/match details/MatchTabs";
import Teams from "./pages/teams";
import TeamDetails from "./pages/Team details/TeamDetails";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/match-details/:matchId" element={<MatchTabs />} />
        <Route path="/team/:teamId" element={<TeamDetails />} />
        <Route path="/teams" element={<Teams />} />
      </Routes>
    </Router>
  );
}

export default App;
