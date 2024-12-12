import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import MatchTabs from "./pages/match details/MatchTabs";
import Header from "./components/header/Header.js";
import Teams from "./pages/teams.js";
import TeamDetails from "./pages/Team details/TeamDetails.js";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          {" "}
          {/* Replace Switch with Routes */}
          <Route exact path="/" element={<Home />} />{" "}
          {/* Use element instead of component */}
          <Route path="/match-details/:matchId" element={<MatchTabs />} />{" "}
          <Route path="/team/:teamId" element={<TeamDetails />} />{" "}
          {/* Use element instead of render */}
          <Route path="/teams" element={<Teams />} />
          {""}
        </Routes>
      </Router>
    </>
  );
}

export default App;
